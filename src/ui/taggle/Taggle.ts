import {defaultOptions} from '../../config';
import {ITaggleOptions} from '../../interfaces';
import merge from '../../internal/merge';
import DataProvider from '../../provider/ADataProvider';
import {ALineUp} from '../ALineUp';
import SidePanel from '../panel/SidePanel';
import spaceFillingRule from './spaceFillingRule';
import TaggleRenderer from './TaggleRenderer';
import LocalDataProvider from '../../provider/LocalDataProvider';

export {ITaggleOptions} from '../../interfaces';

export default class Taggle extends ALineUp {
  private readonly spaceFilling: HTMLElement | null;
  private readonly renderer: TaggleRenderer | null;
  private readonly panel: SidePanel | null;

  private readonly options = defaultOptions();


  constructor(node: HTMLElement, data: DataProvider, options: Partial<ITaggleOptions> = {}) {
    super(node, data, options && options.ignoreUnsupportedBrowser === true);
    merge(this.options, options, {
      violationChanged: (_rule: any, violation?: string) => this.setViolation(violation)
    });

    if (!this.isBrowserSupported) {
      this.spaceFilling = null;
      this.renderer = null;
      this.panel = null;
      return;
    }

    this.node.classList.add('lu-taggle', 'lu');

    this.renderer = new TaggleRenderer(data, this.node, this.options);
    this.panel = new SidePanel(this.renderer.ctx, this.node.ownerDocument, {
      collapseable: this.options.sidePanelCollapsed ? 'collapsed' : true,
      hierarchy: this.options.hierarchyIndicator
    });
    this.renderer.pushUpdateAble((ctx) => this.panel!.update(ctx));
    this.node.insertBefore(this.panel.node, this.node.firstChild);
    {
      this.panel.node.insertAdjacentHTML('afterbegin', `<div class="lu-expand-button-chooser"><label>
            <input class="expand" type="checkbox">
            <span>Expand</span>
          </label></div>`);
      const expandButton = <HTMLElement>this.node.querySelector('.lu-expand-button-chooser')!;
      const expandInput = <HTMLInputElement>expandButton.querySelector('input.expand');
      expandInput.onchange = () => {
        const selected = expandInput.checked;
        this.renderer!.expandTextureRenderer(selected);
      };
      expandButton.onclick = () => {
        expandInput.checked = !expandInput.checked;
      };
      this.panel.node.insertAdjacentHTML('afterbegin', `<div class="lu-rule-button-chooser"><label>
            <input class="spaceFilling" type="checkbox">
            <span>Overview</span>
          </label></div>`);
      const spaceFilling = spaceFillingRule(this.options);
      this.spaceFilling = <HTMLElement>this.node.querySelector('.lu-rule-button-chooser')!;
      const ruleInput = <HTMLInputElement>this.spaceFilling.querySelector('input.spaceFilling');
      ruleInput.onchange = () => {
        let useTextureRenderer = true;
        if (data instanceof LocalDataProvider) {
          const ldp = <LocalDataProvider>data;
          if (this.node.offsetHeight > ldp.data.length) {
            useTextureRenderer = false;
          }
        }
        const selected = this.spaceFilling!.classList.toggle('chosen');
        if (useTextureRenderer) {
          this.renderer!.useTextureRenderer(selected);
          if (selected) {
            expandButton.style.display = '';
          } else {
            expandButton.style.display = 'none';
          }
          return;
        }
        self.setTimeout(() => this.renderer!.switchRule(selected ? spaceFilling : null));
      };
      if (this.options.overviewMode) {
        ruleInput.checked = true;
        this.spaceFilling.classList.toggle('chosen');
        this.renderer.switchRule(spaceFilling);
      } else {
        expandButton.style.display = 'none';
      }
    }
    this.forward(this.renderer, `${ALineUp.EVENT_HIGHLIGHT_CHANGED}.main`);
  }

  private setViolation(violation?: string) {
    violation = violation || '';
    if (this.spaceFilling) {
      this.spaceFilling.classList.toggle('violated', Boolean(violation));
      this.spaceFilling.lastElementChild!.innerHTML = violation.replace(/\n/g, '<br>');
    }
  }

  destroy() {
    this.node.classList.remove('lu-taggle', 'lu');
    if (this.renderer) {
      this.renderer.destroy();
    }
    if (this.panel) {
      this.panel.destroy();
    }
    super.destroy();
  }

  update() {
    if (this.renderer) {
      this.renderer.update();
    }
  }

  setHighlight(dataIndex: number, scrollIntoView: boolean = true) {
    return this.renderer != null && this.renderer.setHighlight(dataIndex, scrollIntoView);
  }

  getHighlight() {
    return this.renderer ? this.renderer.getHighlight() : -1;
  }

  protected enableHighlightListening(enable: boolean) {
    if (this.renderer) {
      this.renderer.enableHighlightListening(enable);
    }
  }

  setDataProvider(data: DataProvider, dump?: any) {
    super.setDataProvider(data, dump);
    if (!this.renderer) {
      return;
    }
    this.renderer.setDataProvider(data);
    this.update();
    this.panel!.update(this.renderer.ctx);
  }
}
