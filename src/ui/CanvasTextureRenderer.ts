import EngineRanking from './EngineRanking';
import {IDataRow} from '../model';
import {scaleLinear, scaleOrdinal} from 'd3-scale';
import Column from '../model/Column';
import NumberColumn from '../model/NumberColumn';
import NumbersColumn from '../model/NumbersColumn';
import CategoricalColumn from '../model/CategoricalColumn';
import CategoricalsColumn from '../model/CategoricalsColumn';
import CompositeColumn from '../model/CompositeColumn';
import {select as d3Select, mouse as d3Mouse, event as d3Event} from 'd3-selection';
import {drag as d3Drag} from 'd3-drag';
import {ILineUpOptions} from '../interfaces';
import EngineRenderer from './EngineRenderer';
import { MultiTableRowRenderer, GridStyleManager } from 'lineupengine';
import SelectionColumn from '../model/SelectionColumn';
import OverviewDetailColumn from '../model/OverviewDetailColumn';
import Ranking from '../model/Ranking';

export interface ITextureRenderer {
  update(rankings?: EngineRanking[], localData?: IDataRow[][]): void;
  expandTextureRenderer(use: boolean): void;
  destroy(): void;
  show(): void;
  hide(): void;
  updateSelection(dataIndices: number[]): void;
  addRanking(ranking: EngineRanking): void;
  removeRanking(ranking: Ranking | null): void;
  s2d(): void;
  d2s(): void;
}

export default class CanvasTextureRenderer implements ITextureRenderer {
  static readonly MAX_CANVAS_SIZE = 32767;
  static readonly AGGREGATED_ROW_HEIGHT = 45;
  static readonly RENDER_ROW_PADDING = 10;
  static readonly EXPANDED_ROW_CLASS = 'expand';
  static readonly SELECTION_DRAW_WIDTH = 2;

  readonly node: HTMLElement;
  readonly canvas: any;
  readonly headerNode: HTMLElement;
  private renderedColumns: any[];
  private dragStartPosition: [number, number] = [0,0];
  private dragOverlay: HTMLElement;
  private detailParts: any[];
  private currentRankings: EngineRanking[] = [];
  private currentLocalData: IDataRow[][] = [];
  private currentNodeHeight: number = 0;
  private currentRankingWidths: number[] = [];
  private engineRenderer: EngineRenderer;
  private engineRankings: EngineRanking[][] = [];
  private alreadyExpanded: boolean = false;
  private expandLaterRows: any[] = [];
  private readonly options: Readonly<ILineUpOptions>;
  private readonly idPrefix = 'testprefix';

  constructor(parent: Element, engineRenderer: EngineRenderer, options: Readonly<ILineUpOptions>) {
    this.node = parent.ownerDocument.createElement('main');
    this.node.id = 'lu-texture-container';
    parent.appendChild(this.node);
    this.canvas = parent.ownerDocument.createElement('canvas');
    this.headerNode = <HTMLElement>d3Select(parent).select('header').node();
    this.engineRenderer = engineRenderer;
    this.options = options;
    this.renderedColumns = [];
    this.detailParts = [];
    this.dragOverlay = this.node;

    this.node.addEventListener('scroll', () => {
      {
        //scroll header with main panel
        this.headerNode.scrollLeft = this.node.scrollLeft;
      }
    });
  }

  updateSelection(dataIndices: number[]) {
    const s = new Set(dataIndices);
    this.engineRankings.forEach((v) => v.forEach((r) => r.updateSelection(s)));
    this.drawSelection();
    this.update();
  }

  update(rankings: EngineRanking[] = this.currentRankings, localData: IDataRow[][] = this.currentLocalData) {
    this.detailParts = [];
    rankings.forEach((r, i) => {
      const rankingIndex = this.currentRankings.findIndex((v) => v === r);
      this.currentLocalData[rankingIndex] = localData[i];
    });
    this.currentNodeHeight = this.node.offsetHeight;
    let totalWidth = 0;
    rankings.forEach((r, i) => {
      let rankingWidth = 0;
      r.ranking.flatColumns.forEach((c) => 'children' in c ? rankingWidth += (<CompositeColumn>c).children.length : rankingWidth += c.getWidth() + 5);
      this.currentRankingWidths[i] = rankingWidth;
      totalWidth += rankingWidth;
    });
    if (totalWidth > this.node.clientWidth) {
        this.currentNodeHeight -= 20;
    }
    this.alreadyExpanded = this.node.classList.contains(CanvasTextureRenderer.EXPANDED_ROW_CLASS);

    this.renderColumns(rankings, localData);
  }

  private renderColumns (rankings: EngineRanking[], localData: IDataRow[][]) {
    rankings.forEach((r, i) => {
      //first find the aggregated parts
      let notAggregatedCount = localData[i].length;
      let gIndex = 0;
      const aggregatedParts = <any>[];
      r.ranking.getGroups().forEach((g) => {
        if (this.engineRenderer.ctx.provider.isAggregated(r.ranking, g)) {
          aggregatedParts.push([gIndex, gIndex + g.order.length - 1]);
          notAggregatedCount -= g.order.length;
        }
        gIndex += g.order.length;
      });
      this.currentNodeHeight -= CanvasTextureRenderer.AGGREGATED_ROW_HEIGHT * aggregatedParts.length;

      //then find the parts to show details
      const rankingIndex = this.currentRankings.findIndex((v) => v === r);
      this.engineRankings[rankingIndex] = [];
      this.detailParts = [];
      let startIndex = -1;
      for (let j = 0; j < localData[i].length; j++) {
        if (this.engineRenderer.ctx.provider.isDetail(localData[i][j].i)) {
          if (startIndex === -1) {
            startIndex = j;
          }
        } else if (startIndex !== -1) {
          this.detailParts.push([startIndex, j-1]);
          startIndex = -1;
        }
      }
      if (startIndex !== -1) {
        this.detailParts.push([startIndex, localData[i].length-1]);
      }

      //combine aggregated parts with detail parts
      const aggregateIndices = <any>[];
      aggregatedParts.forEach((g: any) => {
        for (let j = 0; j < this.detailParts.length; j++) {
          if (g[0] <= this.detailParts[j][0]) {
            if (g[1] < this.detailParts[j][0]) {
              this.detailParts.splice(j, 0, g);
              aggregateIndices.push(j);
              return;
            }
            if (g[1] < this.detailParts[j][1]) {
              this.detailParts.splice(j, 1, g, [g[1] + 1, this.detailParts[j][1]]);
              aggregateIndices.push(j);
              return;
            }
            this.detailParts.splice(j, 1);
            j--;
            continue;
          }
          if (g[0] > this.detailParts[j][1]) {
            continue;
          }
          if (g[1] < this.detailParts[j][1]) {
            this.detailParts.splice(j, 1, [this.detailParts[j][0], g[0] - 1], g, [g[1] + 1, this.detailParts[j][1]]);
            aggregateIndices.push(j + 1);
            return;
          }
          this.detailParts.splice(j, 1, [this.detailParts[j][0], g[0] - 1]);
        }
        this.detailParts.push(g);
        aggregateIndices.push(this.detailParts.length - 1);
      });

      const dataParts = <any>[];
      const expandableParts = <any>[];
      const aggregateParts = <any>[];
      if(this.detailParts.length === 0) {
        dataParts.push(localData[i].length);
      } else {
        let next = 0;
        this.detailParts.forEach((v, j) => {
          const curFrom = v[0];
          const curTo = v[1];
          if (curFrom > next) {
            dataParts.push(curFrom);
          }
          expandableParts.push(dataParts.length);
          if (aggregateIndices.includes(j)) {
            aggregateParts.push(dataParts.length);
          }
          dataParts.push(curTo + 1);
          next = curTo + 1;
        });
        if (next < localData[i].length) {
          dataParts.push(localData[i].length);
        }
      }
      let curIndex = 0;
      const rankingDiv = <any>d3Select(this.node).select(`[data-ranking="${rankingIndex}"]`)!.node();
      if (!rankingDiv) {
        return;
      }
      rankingDiv.innerHTML = ''; //remove all children
      const grouped = r.groupData(localData[i]);
      let aggregateOffset = 0;
      dataParts.forEach((v: number, di: number) => {
        const expandable = expandableParts.includes(di);
        const aggregated = aggregateParts.includes(di);
        let newOffset = 0;
        if (aggregated) {
          newOffset = v - curIndex - 1;
        }
        const data = grouped.slice(curIndex - aggregateOffset, v - aggregateOffset - newOffset);

        const rowDiv = this.node.ownerDocument.createElement('div');
        rowDiv.setAttribute('data-from', `${curIndex}`);
        rowDiv.setAttribute('data-to', `${v-1}`);
        rowDiv.classList.add('rowContainer');
        rankingDiv.appendChild(rowDiv);

        curIndex = v;
        aggregateOffset += newOffset;

        if (!aggregated) {
          const height = data.length / notAggregatedCount * this.currentNodeHeight;
          if (height >= 1) { //only render parts larger than 1px
            const textureDiv = this.node.ownerDocument.createElement('div');
            textureDiv.style.height = `${height}px`;
            textureDiv.classList.add('textureContainer');
            if (!expandable) {
              textureDiv.classList.add('always');
            }
            this.renderedColumns = [];
            r.ranking.flatColumns.forEach((column) => this.createColumn(column, data, textureDiv, false, expandable));
            rowDiv.appendChild(textureDiv);
          }
        }
        if (expandable) {
          const expandLater = () => {
            const engineRendererDiv = this.node.ownerDocument.createElement('article');
            engineRendererDiv.classList.add('engineRendererContainer');
            if (aggregated) {
              engineRendererDiv.classList.add('always');
            }
            if (aggregated) {
              engineRendererDiv.style.height = `${CanvasTextureRenderer.AGGREGATED_ROW_HEIGHT}px`;
            } else {
              engineRendererDiv.style.height = `${(this.options.rowHeight + this.options.rowPadding) * data.length + CanvasTextureRenderer.RENDER_ROW_PADDING}px`;
            }
            engineRendererDiv.style.width = `${this.currentRankingWidths[i]}px`;

            rowDiv.appendChild(engineRendererDiv);

            const table = new MultiTableRowRenderer(engineRendererDiv, `#${this.idPrefix}`);
            const engineRanking = table.pushTable((header: HTMLElement, body: HTMLElement, tableId: string, style: GridStyleManager) => new EngineRanking(r.ranking, header, body, tableId, style, this.engineRenderer.ctx, {
              animation: this.options.animated,
              customRowUpdate: this.options.customRowUpdate || (() => undefined),
              levelOfDetail: this.options.levelOfDetail || (() => 'high'),//
              flags: this.options.flags
            }, true));

            this.engineRenderer.render(engineRanking, <any>data);
            this.engineRankings[rankingIndex].push(engineRanking);
          };
          if (this.alreadyExpanded || aggregated) {
            expandLater();
          } else {
            this.expandLaterRows.push(expandLater);
          }
        }

        if (expandable) {
          return;
        }
        const that = this;
        d3Select(rowDiv)
          .call((<any>d3Drag())
            .on('start', (_: any, __: any, element: HTMLElement[]) => { that.dragStarted(element[0]); })
            .on('drag', (_: any, __: any, element: HTMLElement[]) => { that.dragged(element[0]); })
            .on('end', (_: any, __: any, element: HTMLElement[]) => { that.dragEnd(element[0]); }));
      });
    });
    this.drawSelection();
  }

  private createColumn(column: Column, grouped: any[], container: HTMLElement, partOfComposite: boolean, expandable: boolean) {
    if (this.renderedColumns.includes(column.id)) {
      if (partOfComposite) {
        const $container = d3Select(container);
        const $col = $container.select(`.columnContainer[data-columnid="${column.id}"]`).node();
        if ($col !== null) {
          $container.append(() => $col); //reorder the column
          return;
        }
      } else {
        return; //column already rendered
      }
    }

    const columnContainer = this.node.ownerDocument.createElement('div');
    columnContainer.style.width = `${column.getWidth()}px`;
    columnContainer.setAttribute('data-columnid', column.id);
    columnContainer.classList.add('columnContainer');
    if (partOfComposite) {
      columnContainer.classList.add('partOfComposite');
    }

    let newElements = <any>[];
    if (column instanceof NumbersColumn) {
      const col = <NumbersColumn>column;
      newElements = this.generateImage(grouped.map((value) => {
        return (<any>value).v[(<any>col.desc).column];
      }), CanvasTextureRenderer.getColorScale(col));
    } else if (column instanceof NumberColumn) {
      const col = <NumberColumn>column;
      newElements = this.generateImage(grouped.map((value) => {
        return [(<any>value).v[(<any>col.desc).column]];
      }), CanvasTextureRenderer.getColorScale(col));
    } else if (column instanceof CategoricalsColumn) {
      const col = <CategoricalsColumn>column;
      newElements = this.generateImage(grouped.map((value) => {
        return (<any>value).v[(<any>col.desc).column];
      }), CanvasTextureRenderer.getColorScale(col));
    } else if (column instanceof CategoricalColumn) {
      const col = <CategoricalColumn>column;
      newElements = this.generateImage(grouped.map((value) => {
        return [(<any>value).v[(<any>col.desc).column]];
      }), CanvasTextureRenderer.getColorScale(col));
    } else if (column instanceof SelectionColumn) {
      const col = <SelectionColumn>column;
      newElements = this.generateImage(grouped.map((value) => {
        return [this.engineRenderer.ctx.provider.isSelected((<any>value).i)];
      }), CanvasTextureRenderer.getColorScale(col));
    } else if (column instanceof OverviewDetailColumn) {
      const col = <OverviewDetailColumn>column;
      newElements = this.generateImage(grouped.map((value) => {
        return [this.engineRenderer.ctx.provider.isDetail((<any>value).i)];
      }), CanvasTextureRenderer.getColorScale(col));
    } else if ('children' in column) {
      //handle composite columns
      (<CompositeColumn>column).children.forEach((c) => this.createColumn(c, grouped, container, true, expandable));
      return;
    } else {
      newElements.push(this.node.ownerDocument.createElement('canvas'));
    }

    newElements.forEach((newElement: any) => columnContainer.appendChild(newElement));

    container.appendChild(columnContainer);
    this.renderedColumns.push(column.id);
  }

  private static getColorScale(column: Column) {
    let domain = [0, 0];

    if (column instanceof NumberColumn || column instanceof  NumbersColumn) {
      const colorScale = scaleLinear<string, string>();
      domain = column.getMapping().domain;
      if (domain[0] < 0 && domain[1] > 0) { // diverging
        colorScale
          .domain([domain[0], 0, domain[1]]);
      } else {
        colorScale
          .domain([domain[0], domain[1]]);
      }
      colorScale.range(['white', column.color ? column.color : 'black']);
      return colorScale;
    }
    if (column instanceof CategoricalColumn) {
      const colorScale = scaleOrdinal<string, string>();
      const categories = column.categories;
      colorScale
        .domain(categories.map((v) => v.name))
        .range(categories.map((v) => v.color));
      return colorScale;
    }

    if (column instanceof SelectionColumn) {
      const colorScale = scaleOrdinal<boolean, string>();
      colorScale
        .domain([false, true])
        .range(['transparent', 'orange']);
      return colorScale;
    }

    if (column instanceof OverviewDetailColumn) {
      const colorScale = scaleOrdinal<boolean, string>();
      colorScale
        .domain([false, true])
        .range(['transparent', 'blue']);
      return colorScale;
    }
    return null;
  }

  private generateImage(data: any[][], colorScale: any) {
    const totalLength = data.length;
    const newElements = <any>[];
    while (data.length > 0) {
      const chunk = data.splice(0, CanvasTextureRenderer.MAX_CANVAS_SIZE);
      const height = chunk.length;
      let width = 0;
      if(height > 0) {
        width = chunk[0].length;
      }
      const canvas = this.node.ownerDocument.createElement('canvas');
      canvas.setAttribute('height', `${height}`);
      canvas.setAttribute('width', `${width}`);
      canvas.style.flexGrow = `${height}`;
      canvas.style.height = `${chunk.length / totalLength * 100}%`;
      this.drawOntoCanvas(chunk, colorScale, canvas);
      newElements.push(canvas);
    }
    return newElements;
  }

  private drawOntoCanvas(data: any[][], colorScale: any, canvas: any) {
    if (colorScale === null) {
      return;
    }
    const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
    data.forEach((row, y) => {
      row.forEach((value, x) => {
        ctx.fillStyle = colorScale(value);
        ctx.fillRect(x, y, 1, 1);
      });
    });
    ctx.save();
  }

  expandTextureRenderer(use: boolean) {
    d3Select(this.node).classed(CanvasTextureRenderer.EXPANDED_ROW_CLASS, use);
    if (!this.alreadyExpanded) {
      this.expandLaterRows.forEach((r) => r());
      this.alreadyExpanded = true;
    }
  }

  private dragStarted(element: any) {
    this.dragStartPosition = d3Mouse(element);
    this.dragOverlay = element.ownerDocument.createElement('div');
    this.dragOverlay.id = 'lu-drag-overlay';
    this.dragOverlay.style.width = `${element.scrollWidth}px`;
    element.appendChild(this.dragOverlay);
  }

  private dragged(element: any) {
    const currentPosition = d3Mouse(element);
    if (this.dragStartPosition[1] < currentPosition[1]) {
      this.dragOverlay.style.top = `${this.dragStartPosition[1]}px`;
      this.dragOverlay.style.height = `${currentPosition[1]-this.dragStartPosition[1]}px`;
    } else {
      this.dragOverlay.style.top = `${currentPosition[1]}px`;
      this.dragOverlay.style.height = `${this.dragStartPosition[1]-currentPosition[1]}px`;
    }
  }

  private dragEnd(element: any) {
    this.dragOverlay.remove();
    const currentPosition = d3Mouse(element);
    if(currentPosition[1] === this.dragStartPosition[1]) {
      if (!d3Event.sourceEvent.ctrlKey) {
        if (d3Event.sourceEvent.altKey) {
          this.engineRenderer.ctx.provider.setDetail([]);
        } else {
          this.engineRenderer.ctx.provider.setSelection([]);
        }
      }
      return;
    }
    const from = Math.min(currentPosition[1], this.dragStartPosition[1]);
    const to =  Math.max(currentPosition[1], this.dragStartPosition[1]);
    const fromData = parseInt(element.getAttribute('data-from'), 10);
    const toData = parseInt(element.getAttribute('data-to'), 10);
    const fromIndex = Math.max(Math.floor(from / element.offsetHeight * (toData - fromData) + fromData), fromData);
    const toIndex = Math.min(Math.ceil(to / element.offsetHeight * (toData - fromData) + fromData), toData);
    if (fromIndex > toIndex) {
      return;
    }
    const ranking = element.parentElement.getAttribute('data-ranking');
    const indices : number[] = d3Event.sourceEvent.ctrlKey ? (d3Event.sourceEvent.altKey ? this.engineRenderer.ctx.provider.getDetail() : this.engineRenderer.ctx.provider.getSelection()) :[];
    this.currentLocalData[ranking].slice(fromIndex, toIndex).forEach((d) => {
      indices.push(d.i);
    });
    if (d3Event.sourceEvent.altKey) {
      this.engineRenderer.ctx.provider.setDetail(indices);
    } else {
      this.engineRenderer.ctx.provider.setSelection(indices);
    }
  }

  addRanking(ranking: EngineRanking) {
    this.currentRankings.push(ranking);
    this.currentLocalData.push([]);
    const rankingDiv = this.node.ownerDocument.createElement('div');
    rankingDiv.classList.add('rankingContainer');
    rankingDiv.setAttribute('data-ranking', `${this.currentRankings.length-1}`);
    this.node.appendChild(rankingDiv);
  }

  removeRanking(ranking: Ranking | null) {
    if (!ranking) {
      this.node.innerHTML = '';
    }
    const index = this.currentRankings.findIndex((r) => r.ranking === ranking);
    if (index < 0) {
      return; // error
    }
    this.currentRankings.splice(index, 1);
    this.engineRankings.splice(index, 1);
    this.currentLocalData.splice(index, 1);
    d3Select(this.node).select(`[data-ranking="${index}"]`).remove();
  }

  destroy() {
    this.node.remove();
  }

  show() {
    this.node.style.display = null;
  }

  hide() {
    this.node.style.display = 'none';
  }

  s2d() {
    this.engineRenderer.ctx.provider.setDetail(this.engineRenderer.ctx.provider.getSelection());
  }

  d2s() {
    this.engineRenderer.ctx.provider.setSelection(this.engineRenderer.ctx.provider.getDetail());
  }

  drawSelection() {
    d3Select(this.node).selectAll('.selectionColumn').nodes().forEach((v: any) => {
      let parent = v.parentElement;
      while (!parent.classList.contains('rowContainer')) {
        parent = parent.parentElement;
      }
      const fromIndex = parseInt(parent.getAttribute('data-from'), 10);
      const toIndex = parseInt(parent.getAttribute('data-to'), 10);

      const ctx = <CanvasRenderingContext2D>v.getContext('2d');

      for (let i = fromIndex; i <= toIndex; i++) {
        if (this.engineRenderer.ctx.provider.isSelected(this.currentLocalData[0][i].i)) {
          ctx.fillStyle = '#ffa809';
        } else {
          ctx.fillStyle = '#ffffff';
        }
        ctx.fillRect(CanvasTextureRenderer.SELECTION_DRAW_WIDTH, i, CanvasTextureRenderer.SELECTION_DRAW_WIDTH, 1);
      }
      ctx.save();
    });
  }
}
