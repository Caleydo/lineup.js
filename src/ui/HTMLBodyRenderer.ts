/**
 * Created by Samuel Gratzl on 14.08.2015.
 */

import {Selection} from 'd3-selection';
import DataProvider from '../provider/ADataProvider';
import {createHTML} from '../renderer/index';
import {ISlicer, IRankingData, IBodyRenderContext} from './ABodyRenderer';
import ADOMBodyRenderer, {DOMElement} from './ADOMBodyRenderer';
import {IDOMRenderContext} from '../renderer/RendererContexts';

const domHTMLMappings = {
  root: 'div',
  g: 'div',

  setSize(n: HTMLElement, width: number, height: number) {
    n.style.width = width + 'px';
    n.style.height = height + 'px';
  },

  bg: 'div',
  updateBG: (sel: Selection<DOMElement, any, any, void>, callback: (d: any, i: number) => [number, number]) => {
    sel.style('height', (d, i) => callback(d, i)[1] + 'px')
      .style('width', (d, i) => callback(d, i)[0] + 'px');
  },
  meanLine: 'div',
  updateMeanLine($mean: Selection<DOMElement, any, any, void>, x: number, height: number) {
    $mean.style('left', x + 'px').style('height', height + 'px');
  },
  slopes: 'svg',
  updateSlopes: ($slopes: Selection<DOMElement, any, any, void>, width: number, height: number, callback: (d, i) => number) => {
    $slopes.attr('width', width).attr('height', height).style('left', (d, i)=>callback(d, i) + 'px');
  },

  creator: createHTML,
  translate: (n: HTMLElement, x: number, y: number) => n.style.transform = `translate(${x}px,${y}px)`,
  transform: (sel: Selection<DOMElement, any, any, void>, callback: (d: any, i: number)=> [number,number]) => {
    sel.style('transform', (d, i) => {
      const r = callback(d, i);
      return `translate(${r[0]}px,${r[1]}px)`;
    });
  }
};

export default class HTMLBodyRenderer extends ADOMBodyRenderer {
  constructor(data: DataProvider, parent: Element, slicer: ISlicer, options = {}) {
    super(data, parent, slicer, domHTMLMappings, options);
  }

  protected updateClipPaths(data: IRankingData[], context: IBodyRenderContext&IDOMRenderContext, height: number) {
    // nothing to do
  }
}
