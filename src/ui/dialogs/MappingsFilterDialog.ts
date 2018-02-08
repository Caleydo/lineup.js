import {computeStats, IStatistics, round} from '../../internal';
import {
  IMapAbleColumn, IMappingFunction, isMissingValue, noNumberFilter, ScaleMappingFunction,
  ScriptMappingFunction
} from '../../model';
import {isDummyNumberFilter} from '../../model/internal';
import {ISummaryRenderer} from '../../renderer/interfaces';
import {IRankingHeaderContext} from '../interfaces';
import ADialog, {IDialogContext} from './ADialog';
import {IMappingAdapter, MappingLine} from './MappingLineDialog';
import { updateFilterState } from './utils';

/** @internal */
export default class MappingsFilterDialog extends ADialog {

  private scale: IMappingFunction;

  private readonly mappingLines: MappingLine[] = [];
  private rawDomain: [number, number];

  private readonly summary: ISummaryRenderer;
  private readonly data: Promise<number[]>;
  private readonly idPrefix: string;
  private loadedData: number[];
  private hist: IStatistics;

  private readonly mappingAdapter: IMappingAdapter = {
    destroyed: (self: MappingLine) => {
      this.mappingLines.splice(this.mappingLines.indexOf(self), 1);
    },
    updated: () => this.updateLines(this.computeScale()),
    domain: () => this.rawDomain,
    normalizeRaw: this.normalizeRaw.bind(this),
    unnormalizeRaw: this.unnormalizeRaw.bind(this),
    dialog: this.dialog
  };

  constructor(private readonly column: IMapAbleColumn, dialog: IDialogContext, ctx: IRankingHeaderContext) {
    super(dialog, {
      fullDialog: true
    });

    this.idPrefix = `me${ctx.idPrefix}`;
    this.scale = this.column.getMapping().clone();
    const domain = this.scale.domain;
    this.rawDomain = [domain[0], domain[domain.length - 1]];
    this.summary = ctx.summaryRenderer(this.column, true);

    this.data = Promise.resolve(ctx.provider.mappingSample(column));
  }

  private get scaleType() {
    if (!(this.scale instanceof ScaleMappingFunction)) {
      return 'script';
    }
    const base = this.scale.scaleType;
    if (base !== 'linear') {
      return base;
    }
    // check if invert or absolute
    const r = this.scale.range;
    if (r.length === 2 && r[0] === 1 && r[1] === 0) {
      return 'linear_invert';
    }
    if (r.length === 3 && r[0] === 1 && r[1] === 0 && r[2] === 1) {
      return 'linear_abs';
    }
    return 'linear';
  }

  build(node: HTMLElement) {
    node.classList.add('lu-dialog-mapper');

    node.insertAdjacentHTML('beforeend', `
        <div><label for="${this.idPrefix}mapping_type"><h4>Mapping / Scaling Type:</h4> <select id="${this.idPrefix}mapping_type">
        <option value="linear">Linear</option>
        <option value="linear_invert">Invert</option>
        <option value="linear_abs">Absolute</option>
        <option value="log">Log</option>
        <option value="pow1.1">Pow 1.1</option>
        <option value="pow2">Pow 2</option>
        <option value="pow3">Pow 3</option>
        <option value="sqrt">Sqrt</option>
        <option value="script">Custom Script</option>
      </select>
      </label></div>
        ${this.summary.template}
        <h4 data-toggle>Mapping Details</h4>
        <div class="lu-details"><h4>Domain (min - max): </h4><input id="${this.idPrefix}min" required type="number" value="${round(this.rawDomain[0], 3)}" step="any"> - <input id="${this.idPrefix}max" required type="number" value="${round(this.rawDomain[1], 3)}" step="any"></div>
        <h4 class="lu-details" style="text-align: center">Input Domain (min - max)</h4>
        <svg class="lu-details" viewBox="0 0 106 66">
           <g transform="translate(3,3)">
              <line x2="100"></line>
              <rect y="-3" width="100" height="10"></rect>
              <line y1="60" x2="100" y2="60"></line>
              <rect y="36" width="100" height="10"></rect>
           </g>
        </svg>
        <h4 class="lu-details" style="text-align: center; margin-top: 0">Output Normalized Domain (0 - 1)</h4>
        <div class="lu-script">
          <h4>Custom Mapping Script</h4>
          <textarea></textarea>
        </div>`);

    // patch in lu-summary and renderer
    const summary = <HTMLElement>node.children[1];
    summary.classList.add('lu-summary');
    summary.dataset.interactive = '';
    summary.dataset.renderer = this.column.getSummaryRenderer();


    this.find('[data-toggle]').onclick = (evt) => {
      evt.stopPropagation();
      evt.preventDefault();
      const elem = (<HTMLElement>evt.currentTarget).dataset;
      elem.toggle = elem.toggle === 'open' ? '' : 'open';
    };

    const g = <SVGGElement>node.querySelector('.lu-details > g');

    Array.from(node.querySelectorAll('.lu-details rect')).forEach((d: SVGRectElement) => d.onclick = (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      const bb = d.getBoundingClientRect();
      const x = round((evt.x - bb.left) * 100 / bb.width, 2);
      const m = new MappingLine(g, x, x, this.mappingAdapter);
      this.mappingLines.push(m);
    });

    {
      const createMappings = () => {
        if (!(this.scale instanceof ScaleMappingFunction)) {
          return;
        }
        const domain = this.scale.domain;
        const range = this.scale.range;
        this.mappingLines.push(...domain.map((d, i) => new MappingLine(g, this.normalizeRaw(d), range[i] * 100, this.mappingAdapter)));
      };

      const select = <HTMLSelectElement>this.find('select');
      const textarea = <HTMLTextAreaElement>this.find('textarea');
      select.onchange = (evt) => {
        const select = <HTMLSelectElement>evt.currentTarget;
        switch (select.value) {
          case 'linear_invert':
            this.scale = new ScaleMappingFunction(this.rawDomain.slice(), 'linear', [1, 0]);
            break;
          case 'linear_abs':
            this.scale = new ScaleMappingFunction([this.rawDomain[0], (this.rawDomain[1] - this.rawDomain[0]) / 2, this.rawDomain[1]], 'linear', [1, 0, 1]);
            break;
          case 'script':
            const s = new ScriptMappingFunction(this.rawDomain.slice());
            this.scale = s;
            textarea.value = s.code;
            break;
          default:
            this.scale = new ScaleMappingFunction(this.rawDomain.slice(), select.value);
            break;
        }
        this.mappingLines.splice(0, this.mappingLines.length).forEach((d) => d.destroy());
        createMappings();
        node.dataset.scale = select.value;
        this.updateLines();
      };
      const scaleType = node.dataset.scale = this.scaleType;
      select.selectedIndex = Array.from(select.options).findIndex((d) => d.value === scaleType);

      if (scaleType === 'script') {
        textarea.value = (<ScriptMappingFunction>this.scale).code;
      }
      createMappings();
    }

    {
      this.forEach('.lu-details input[type=number]', (d: HTMLInputElement, i) => d.onchange = () => {
        const v = parseFloat(d.value);
        if (v === this.rawDomain[i]) {
          d.setCustomValidity('');
          return;
        }
        const other = this.rawDomain[1 - i];
        if (isNaN(v) || (i === 0 && v >= other) || (i === 1 && v <= other)) {
          d.setCustomValidity(`value has to be ${i === 0 ? '<= max' : '>= min'}`);
          return;
        }
        d.setCustomValidity('');
        this.rawDomain[i] = v;

        if (!this.loadedData) {
          return;
        }
        this.hist = computeStats(this.loadedData, (v) => v, (v) => isMissingValue(v), this.rawDomain);
        this.summary.update(summary, this.hist);
        this.updateLines();
      });
    }

    this.data.then((values) => {
      this.loadedData = values.filter((v) => !isMissingValue(v));
      this.hist = computeStats(this.loadedData, (v) => v, () => false, this.rawDomain);
      this.summary.update(summary, this.hist);

      Array.from(this.loadedData).forEach((v) => {
        g.insertAdjacentHTML('afterbegin', `<line data-v="${v}" x1="${round(this.normalizeRaw(v), 2)}" x2="${round(this.scale.apply(v)*100, 2)}" y2="60"></line>`);
      });
    });
  }

  private update() {
    const scaleType = this.node.dataset.scale = this.scaleType;
    const select = <HTMLSelectElement>this.find('select');
    select.selectedIndex = Array.from(select.options).findIndex((d) => d.value === scaleType);
    if (scaleType === 'script') {
      (<HTMLTextAreaElement>this.find('textarea')).value = (<ScriptMappingFunction>this.scale).code;
    }
    const domain = this.scale.domain;
    this.forEach('.lu-details input[type=number]', (d: HTMLInputElement, i) => {
      d.value = String(domain[i]);
    });
  }

  private updateLines(scale = this.scale) {
    Array.from(this.node.querySelectorAll('.lu-details > g > line[x1]')).forEach((d: SVGLineElement) => {
      const v = parseFloat(d.getAttribute('data-v')!);
      d.setAttribute('x1', round(this.normalizeRaw(v), 2).toString());
      d.setAttribute('x2', round(scale.apply(v) * 100, 2).toString());
    });
  }

  private applyMapping(newScale: IMappingFunction, filter: { min: number, max: number, filterMissing: boolean }) {
    updateFilterState(this.attachment, this.column, !isDummyNumberFilter(filter));

    this.column.setMapping(newScale);
    this.column.setFilter(filter);
  }

  protected reset() {
    this.scale = this.column.getOriginalMapping();
    this.applyMapping(this.scale, noNumberFilter());
    this.update();
    if (this.hist) {
      this.summary.update(this.find('.lu-summary'), this.hist);
    }
    this.updateLines();
  }

  private normalizeRaw(d: number) {
    return (d - this.rawDomain[0]) * 100 / (this.rawDomain[1] - this.rawDomain[0]);
  }

  private unnormalizeRaw(d: number) {
    return (d) * (this.rawDomain[1] - this.rawDomain[0]) / 100 + this.rawDomain[0];
  }

  private computeScale() {
    const s = this.scale.clone();
    if (this.scaleType === 'script') {
      (<ScriptMappingFunction>s).code = this.node.querySelector('textarea')!.value;
      s.domain = this.rawDomain.slice();
    }
    if (s instanceof ScaleMappingFunction) {
      this.mappingLines.sort((a, b) => a.domain - b.domain);
      s.domain = this.mappingLines.map((d) => this.unnormalizeRaw(d.domain));
      s.range = this.mappingLines.map((d) => d.range / 100);
    }
    return s;
  }

  protected submit() {
    if (!this.node.checkValidity()) {
      return false;
    }
    if (this.scaleType === 'script') {
      (<ScriptMappingFunction>this.scale).code = this.node.querySelector('textarea')!.value;
      this.scale.domain = this.rawDomain.slice();
    }
    if (this.scale instanceof ScaleMappingFunction) {
      this.mappingLines.sort((a, b) => a.domain - b.domain);
      this.scale.domain = this.mappingLines.map((d) => this.unnormalizeRaw(d.domain));
      this.scale.range = this.mappingLines.map((d) => d.range / 100);
    }
    this.applyMapping(this.scale, this.column.getFilter());
    return true;
  }
}
