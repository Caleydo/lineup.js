/**
 * Created by Samuel Gratzl on 14.08.2015.
 */

import {select, Selection, event as d3event} from 'd3-selection';
import 'd3-transition';
import {max as d3max} from 'd3-array';
import {forEach, matchColumns} from '../utils';
import Column, {IStatistics} from '../model/Column';
import DataProvider from '../provider/ADataProvider';
import {IDOMRenderContext} from '../renderer/RendererContexts';
import ABodyRenderer, {
  ISlicer,
  IRankingColumnData,
  IRankingData,
  IBodyRenderContext,
  ERenderReason} from './ABodyRenderer';
import ICellRendererFactory from '../renderer/ICellRendererFactory';
import {IDOMCellRenderer} from '../renderer/IDOMCellRenderers';

export declare type DOMElement = HTMLElement | SVGElement & SVGStylable;

export interface IDOMMapping {
  root: string;
  g: string;

  setSize(n: DOMElement, width: number, height: number);

  translate(n: DOMElement, x: number, y: number);
  transform<T>(sel: Selection<DOMElement, T, any, any>, callback: (d: T, i: number) => [number,number]);
  creator(col: Column, renderers: {[key: string]: ICellRendererFactory}, context: IDOMRenderContext): IDOMCellRenderer<DOMElement>;

  bg: string;
  updateBG(sel: Selection<DOMElement, any, any, any>, callback: (d: any, i: number) => [number, number]);

  meanLine: string;
  updateMeanLine($mean: Selection<DOMElement, any, any, any>, x: number, height: number);

  slopes: string;
  updateSlopes($slopes: Selection<DOMElement, any, any, any>, width: number, height: number, callback: (d, i) => number);
}

abstract class ABodyDOMRenderer extends ABodyRenderer {

  protected currentFreezeLeft = 0;

  constructor(data: DataProvider, parent: Element, slicer: ISlicer, private domMapping: IDOMMapping, options = {}) {
    super(data, parent, slicer, domMapping.root, options);
  }

  protected animated<T extends Selection<any, any, any, any>>($rows: T): T {
    if (this.options.animationDuration > 0 && this.options.animation) {
      return <any>$rows.transition().duration(this.options.animationDuration);
    }
    return $rows;
  }

  renderRankings($body: Selection<Element, any, any, null>, data: IRankingData[], context: IBodyRenderContext&IDOMRenderContext, height: number): Promise<any> {
    const that = this;
    const domMapping = this.domMapping;
    const g = this.domMapping.g;

    const $rankings_update = $body.selectAll<DOMElement, IRankingData>(g + '.ranking').data(data, (d) => d.id);
    const $rankings_enter = $rankings_update.enter().append<DOMElement>(g)
      .attr('class', 'ranking')
      .call(domMapping.transform, (d) => [d.shift, 0]);
    $rankingsEnter.append(g).attr('class', 'rows');
    $rankingsEnter.append(g).attr('class', 'meanlines').attr('clip-path', `url(#c${this.options.idPrefix}Freeze)`);
    const $rankings = $rankings_update.merge($rankings_enter);
    //animated shift
    this.animated($rankings).call(domMapping.transform, (d, i) => [d.shift, 0]);


    const toWait: Promise<any>[] = [];
    const renderRanking = ($this: Selection<DOMElement, IRankingData, any, void>, ranking: IRankingData) => {
      let $rows_update = $this.select(g + '.rows').selectAll(g + '.row').data((d) => d.order, String);
      const $rowsEnter = $rows.enter().append(g).attr('class', 'row');
      let $rows = $rows_update.merge($rows_enter);
      $rows_enter.call(domMapping.transform, (d, i) => [0, context.cellPrevY(i)]);

      $rowsEnter.append(domMapping.bg).attr('class', 'bg');
      $rowsEnter
        .on('mouseenter', (d) => this.mouseOver(d, true))
        .on('mouseleave', (d) => this.mouseOver(d, false))
        .on('click', (d) => this.select(d, (<MouseEvent>d3event).ctrlKey));

      //create templates
      const createTemplates = (node: DOMElement, columns: IRankingColumnData[]) => {
        matchColumns(node, columns);
        //set transform
        columns.forEach((col, ci) => {
          const cnode: any = node.childNodes[ci];
          domMapping.translate(cnode, col.shift, 0);
        });
      };

      $rows_enter.append<DOMElement>(g).attr('class', 'cols').attr('clip-path', `url(#c${this.options.idPrefix}Freeze)`).each(function (d, i) {
        createTemplates(this, ranking.columns);
      });

      $rows_enter.append<DOMElement>(g).attr('class', 'frozen').call(this.domMapping.transform, () => [this.currentFreezeLeft, 0]).each(function (d, i) {
        createTemplates(this, ranking.frozen);
      });

      $rows
        .attr('class', (d, i) => 'row ' + (i % 2 === 0 ? 'even' : ''))
        .attr('data-data-index', (d) => d)
        .classed('selected', (d) => this.data.isSelected(d));
      //.classed('highlighted', (d) => this.data.isHighlighted(d.d));

      //animated reordering
      this.animated($rows).call(domMapping.transform, (d, i) => [0, context.cellY(i)]);

      //update background helper
      $rows.select(domMapping.bg).attr('class', 'bg')
        .call(domMapping.updateBG, (d, i) => [ranking.width, context.rowHeight(i)]);

      const updateColumns = (node: DOMElement, r: IRankingData, i: number, columns: IRankingColumnData[]) => {
        //update nodes and create templates
        return r.data[i].then((row) => {
          matchColumns(node, columns);
          columns.forEach((col, ci) => {
            const cnode: any = node.childNodes[ci];
            domMapping.translate(cnode, col.shift, 0);
            col.renderer.update(cnode, row, i);
          });
        });
      };
      //update columns

      $rows.select<DOMElement>(g + '.cols').each(function (d, i) {
        toWait.push(updateColumns(this, ranking, i, ranking.columns));
      });
      //order for frozen in html + set the size in html to have a proper background instead of a clip-path
      const maxFrozen = data.length === 0 || data[0].frozen.length === 0 ? 0 : d3max(data[0].frozen, (f) => f.shift + f.column.getWidth());
      $rows.select<DOMElement>(g + '.frozen').each(function (d, i) {
        domMapping.setSize(this, maxFrozen, that.options.rowHeight);
        toWait.push(updateColumns(this, ranking, i, ranking.frozen));
      });
      $rows_update.exit().remove();
    }

    {
      let $meanlines_update = $rankings.select(g + '.meanlines').selectAll<DOMElement, null>(domMapping.meanLine + '.meanline').data((d) => d.columns.filter((c) => this.showMeanLine(c.column)));
      let $meanlines_enter = $meanlines_update.enter().append<DOMElement>(domMapping.meanLine).attr('class', 'meanline');
      let $meanlines = $meanlines_update.merge($meanlines_enter);
      $meanlines.each(function (d: IRankingColumnData, i: number, j) {
        const h = that.histCache.get(d.column.id);
        const $mean = select<DOMElement, IRankingColumnData>(this);
        if (!h) {
          return;
        }
        h.then((stats: IStatistics) => {
          const xPos = d.shift + d.column.getWidth() * stats.mean;
          domMapping.updateMeanLine($mean, isNaN(xPos) ? 0 : xPos, height);
        });
      });
      $meanlines_update.exit().remove();
    }

    $rankings.select<DOMElement>(g + '.rows').each(function(d) {
      renderRanking(select<DOMElement, IRankingData>(this), d);
    });

    $rankings_update.exit().remove();

    return Promise.all(toWait);
  }

  select(dataIndex: number, additional = false) {
    const selected = super.select(dataIndex, additional);
    this.$node.selectAll(`[data-data-index="${dataIndex}"]`).classed('selected', selected);
    return selected;
  }

  drawSelection() {
    const indices = this.data.getSelection();

    forEach(this.node, '.selected', (d) => d.classList.remove('selected'));
    if (indices.length === 0) {
      return;
    } else {
      const q = indices.map((d) => `[data-data-index='${d}']`).join(',');
      forEach(this.node, q, (d) => d.classList.add('selected'));
    }
  }

  mouseOver(dataIndex: number, hover = true) {
    super.mouseOver(dataIndex, hover);

    function setClass(item: Element) {
      item.classList.add('hover');
    }

    forEach(this.node, '.hover', (d) => d.classList.remove('hover'));
    if (hover) {
      forEach(this.node, `[data-data-index='${dataIndex}']`, setClass);
    }
  }

  renderSlopeGraphs($parent: Selection<Element, any, any, null>, data: IRankingData[], context: IBodyRenderContext&IDOMRenderContext, height: number) {
    const slopes = data.slice(1).map((d, i) => ({left: data[i].order, left_i: i, right: d.order, right_i: i + 1}));

    const $slopes_update = $parent.selectAll(this.domMapping.slopes + '.slopegraph').data(slopes);
    const $slopes_enter = $slopes_update.enter().append(this.domMapping.slopes).attr('class', 'slopegraph');
    const $slopes = $slopes_update.merge($slopes_enter);
    //$slopes.attr('transform', (d, i) => `translate(${(shifts[i + 1].shift - this.options.slopeWidth)},0)`);
    $slopes.call(this.domMapping.updateSlopes, this.options.slopeWidth, height, (d, i) => ((data[i + 1].shift - this.options.slopeWidth)));

    const $lines_update = $slopes.selectAll('line.slope').data((d) => {
      const cache = new Map<number,number>();
      d.right.forEach((dataIndex, pos) => cache.set(dataIndex, pos));
      return d.left.map((dataIndex, pos) => ({
        dataIndex,
        lpos: pos,
        rpos: cache.get(dataIndex)
      })).filter((d) => d.rpos != null);
    });
    const $lines_enter = $lines_update.enter().append('line').attr('class', 'slope').attr('x2', this.options.slopeWidth)
      .on('mouseenter', (d) => this.mouseOver(d.data_index, true))
      .on('mouseleave', (d) => this.mouseOver(d.data_index, false));
    $lines_update.merge($lines_enter)
      .attr('data-data-index', (d) => d.data_index)
      .attr('y1', (d: any) => context.rowHeight(d.lpos) * 0.5 + context.cellY(d.lpos))
      .attr('y2', (d: any) => context.rowHeight(d.rpos) * 0.5 + context.cellY(d.rpos));
    $lines_update.exit().remove();

    $slopes_update.exit().remove();
  }

  updateFreeze(left: number) {
    forEach(this.node, this.domMapping.g + '.row .frozen', (row: DOMElement) => {
      this.domMapping.translate(row, left, 0);
    });
    const item = <SVGElement & SVGStylable>this.node.querySelector(`clipPath#c${this.options.idPrefix}Freeze`);
    if (item) {
      this.domMapping.translate(item, left, 0);
    }
    this.currentFreezeLeft = left;
  }

  protected abstract updateClipPaths(data: IRankingData[], context: IBodyRenderContext&IDOMRenderContext, height: number);

  protected createContextImpl(indexShift: number): IBodyRenderContext {
    return this.createContext(indexShift, this.domMapping.creator);
  }

  protected updateImpl(data: IRankingData[], context: IBodyRenderContext, width: number, height: number, reason: ERenderReason) {
    // - ... added one to often
    this.domMapping.setSize(this.node, Math.max(0, width), height);

    let $body = this.$node.select<DOMElement>(this.domMapping.g + '.body');
    if ($body.empty()) {
      $body = this.$node.append<DOMElement>(this.domMapping.g).classed('body', true);
    }

    this.renderSlopeGraphs($body, data, context, height);
    this.updateClipPaths(data, context, height);
    return this.renderRankings($body, data, context, height);
  }
}

export default ABodyDOMRenderer;
