import {defaultOptions} from '../../config';
import {ITaggleOptions} from '../../interfaces';
import merge from '../../internal/merge';
import DataProvider from '../../provider/ADataProvider';
import {ALineUp} from '../ALineUp';
import SidePanel from '../panel/SidePanel';
import spaceFillingRule from './spaceFillingRule';
import TaggleRenderer from './TaggleRenderer';
import LocalDataProvider from '../../provider/LocalDataProvider';
import {cssClass, engineCssClass} from '../../styles/index';
import {GridStyleManager} from 'lineupengine';

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

    this.node.classList.add(cssClass(), cssClass('taggle'));

    this.renderer = new TaggleRenderer(data, this.node, this.options);
    this.panel = new SidePanel(this.renderer.ctx, this.node.ownerDocument!, {
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
      this.panel.node.insertAdjacentHTML('afterbegin', `<div class="${cssClass('rule-button-chooser')}"><label>
            <input type="checkbox">
            <span>Overview</span>
            <div class="${cssClass('rule-violation')}"></div>
          </label></div>`);
      const spaceFilling = spaceFillingRule(this.options);
      this.spaceFilling = <HTMLElement>this.panel.node.querySelector(`.${cssClass('rule-button-chooser')}`)!;
      const input = <HTMLInputElement>this.spaceFilling.querySelector('input');
      input.onchange = () => {
        const selected = this.spaceFilling!.classList.toggle(cssClass('chosen'));
        self.setTimeout(() => {
          this.updateLodRules(selected);
          this.renderer!.switchRule(selected ? spaceFilling : null);
        });
      };
      if (this.options.overviewMode) {
        input.checked = true;
        this.spaceFilling.classList.toggle(cssClass('chosen'));
        this.updateLodRules(true);
        this.renderer.switchRule(spaceFilling);
      } else {
        expandButton.style.display = 'none';
      }
    }
    this.forward(this.renderer, `${ALineUp.EVENT_HIGHLIGHT_CHANGED}.main`);
  }

  private updateLodRules(overviewMode: boolean) {
    if (!this.renderer) {
      return;
    }
    updateLodRules(this.renderer.style, overviewMode, this.options);
  }

  private setViolation(violation?: string) {
    violation = violation || '';
    if (this.spaceFilling) {
      this.spaceFilling.classList.toggle(cssClass('violated'), Boolean(violation));
      this.spaceFilling.querySelector(`.${cssClass('rule-violation')}`)!.innerHTML = violation.replace(/\n/g, '<br>');
    }
  }

  destroy() {
    this.node.classList.remove(cssClass(), cssClass('taggle'));
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

export function updateLodRules(style: GridStyleManager, overviewMode: boolean, options: Readonly<ITaggleOptions>) {
  if (!overviewMode) {
    style.deleteRule('taggle_lod_rule');
    style.deleteRule('lineup_rowPadding1');
    style.deleteRule('lineup_rowPadding2');
    return;
  }

  style.updateRule('taggle_lod_rule', `
  .${engineCssClass('tr')}.${cssClass('low')}[data-agg=detail]:hover`, {
    /* show regular height for hovered rows in low + medium LOD */
    height: `${options.rowHeight}px !important`
  });

  style.updateRule('lineup_rowPadding1', `
  .${engineCssClass('tr')}.${cssClass('low')}`, {
      marginTop: '0'
    });

  // no margin for hovered low level row otherwise everything will be shifted down and the hover is gone again
  // .${engineCssClass('tr')}.${cssClass('low')}:hover,

  // padding in general and for hovered low detail rows + their afterwards
  style.updateRule('lineup_rowPadding2', `
  .${engineCssClass('tr')}.${cssClass('low')}.${engineCssClass('highlighted')},
  .${engineCssClass('tr')}.${cssClass('selected')},
  .${engineCssClass('tr')}.${cssClass('low')}:hover + .${engineCssClass('tr')}.${cssClass('low')},
  .${engineCssClass('tr')}.${cssClass('low')}.${engineCssClass('highlighted')} + .${engineCssClass('tr')}.${cssClass('low')},
  .${engineCssClass('tr')}.${cssClass('selected')} + .${engineCssClass('tr')}.${cssClass('low')}`, {
      marginTop: `${options.rowPadding}px !important`
    });
}
