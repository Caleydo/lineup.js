/**
 * Created by Samuel Gratzl on 18.07.2017.
 */
import {AEventDispatcher, debounce, forEach, merge} from '../../utils';
import {default as ABodyRenderer, IBodyRendererOptions} from '../ABodyRenderer';
import DataProvider, {IDataRow} from '../../provider/ADataProvider';
import {default as Column, ICategoricalStatistics, IFlatColumn, IStatistics} from '../../model/Column';
import {createDOM, renderers as defaultRenderers} from '../../renderer';
import {filters as defaultFilters} from '../../dialogs';
import {default as RenderColumn, IRankingContext} from './RenderColumn';
import EngineRankingRenderer from './EngineRankingRenderer';
import {uniformContext} from 'lineupengine/src';
import StringColumn from '../../model/StringColumn';
import Ranking from '../../model/Ranking';
import {ILineUpRenderer} from '../index';
import {ILineUpConfig, IRenderingOptions} from '../../lineup';


export default class EngineRenderer extends AEventDispatcher implements ILineUpRenderer {
  static readonly EVENT_HOVER_CHANGED = ABodyRenderer.EVENT_HOVER_CHANGED;
  static readonly EVENT_RENDER_FINISHED = ABodyRenderer.EVENT_RENDER_FINISHED;

  protected readonly options: IBodyRendererOptions = {
    rowHeight: 22,
    textHeight: 13, //10pt
    rowPadding: 1,
    rowBarPadding: 1,
    rowBarTopPadding: 1,
    rowBarBottomPadding: 1,
    idPrefix: '',
    slopeWidth: 150,
    columnPadding: 5,
    stacked: true,
    animation: false, //200
    animationDuration: 1000,

    renderers: Object.assign({}, defaultRenderers),


    meanLine: false,

    actions: [],

    freezeCols: 0
  };

  private readonly histCache = new Map<string, IStatistics | ICategoricalStatistics>();

  readonly node: HTMLElement;

  readonly ctx: IRankingContext & { data: IDataRow[] };

  private readonly renderer: EngineRankingRenderer;

  constructor(private data: DataProvider, parent: Element, options: ILineUpConfig) {
    super();
    merge(this.options, options.body, options.header, options);
    this.node = parent.ownerDocument.createElement('main');
    parent.appendChild(this.node);

    const fixOptions: any = this.options;

    function findOption(key: string, defaultValue: any): any {
      if (key in options) {
        return fixOptions[key];
      }
      if (key.indexOf('.') > 0) {
        const p = key.substring(0, key.indexOf('.'));
        key = key.substring(key.indexOf('.') + 1);
        if (p in options && key in fixOptions[p]) {
          return fixOptions[p][key];
        }
      }
      return defaultValue;
    }

    this.ctx = {
      provider: data,
      options: Object.assign({
        filters: Object.assign({}, defaultFilters), //TODO
        linkTemplates: <string[]>[], //TODO
        autoRotateLabels: false, //TODO
        searchAble: (col: Column) => col instanceof StringColumn //TODO
      }, this.options),
      option: findOption,
      statsOf: (col: Column) => {
        const r = this.histCache.get(col.id);
        if (r == null || r instanceof Promise) {
          return null;
        }
        return r;
      },
      renderer: (col: Column) => createDOM(col, this.options.renderers, this.ctx),
      idPrefix: this.options.idPrefix,
      data: [],
      getRow: (index: number) => this.ctx.data[index]
    };

    this.renderer = new EngineRankingRenderer(this.node, this.options.idPrefix, this.ctx);
  }

  protected createEventList() {
    return super.createEventList().concat([EngineRenderer.EVENT_HOVER_CHANGED, EngineRenderer.EVENT_RENDER_FINISHED]);
  }

  changeDataStorage(data: DataProvider) {
    this.data = data;
    //TODO rebuild;
  }

  update() {
    const ranking = this.data.getLastRanking();
    const order = ranking.getOrder();
    const data = this.data.view(order);
    this.ctx.data = (Array.isArray(data) ? data : []).map(((v, i) => ({v, dataIndex: order[i]})));
    const that = this;
    ranking.on(`${Ranking.EVENT_DIRTY}.body`, debounce(function (this: { primaryType: string }) {
      if (this.primaryType !== Column.EVENT_WIDTH_CHANGED) {
        that.update();
      }
    }));

    const cols: IFlatColumn[] = [];
    ranking.flatten(cols, 0, 1, 0);
    const columns = cols.map((c, i) => {
      const renderer = createDOM(c.col, this.options.renderers, this.ctx);
      return new RenderColumn(c.col, c.col.getRendererType(), renderer, i);
    });

    cols.forEach((c) => c.col.on(`${Column.EVENT_WIDTH_CHANGED}.body`, () => {
      this.renderer.updateColumnWidths();
    }));

    const rowContext = uniformContext(this.ctx.data.length, 20);

    this.renderer.render(columns, rowContext);
  }

  select(dataIndex: number, additional?: boolean) {
    if (!additional) {
      forEach(this.node, `[data-data-index].selected`, (n: HTMLElement) => {
        n.classList.remove('selected');
      });
    }
    forEach(this.node, `[data-data-index="${dataIndex}]`, (n: HTMLElement) => {
      n.classList.add('selected');
    });
  }

  fakeHover(dataIndex: number) {
    const old = this.node.querySelector(`[data-data-index].hovered`);
    if (old) {
      old.classList.remove('hovered');
    }
    const item = this.node.querySelector(`[data-data-index="${dataIndex}"].hovered`);
    if (item) {
      item.classList.add('hovered');
    }
  }

  updateFreeze(left: number) {
    // nothing to do
  }

  scrolled(delta: number) {
    // internally nothing to do
  }

  destroy() {
    // TODO
  }

  scrollIntoView(index: number) {

  }

  setBodyOption(option: keyof IRenderingOptions, value: boolean) {

  }
}