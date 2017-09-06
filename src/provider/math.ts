/**
 * Created by Samuel Gratzl on 10.08.2017.
 */

import * as d3 from 'd3';
import {ICategoricalStatistics, IStatistics} from '../model/Column';


export function getNumberOfBins(length: number) {
  // as by default used in d3 the Sturges' formula
  return Math.ceil(Math.log(length) / Math.LN2) + 1;
}

/**
 * computes the simple statistics of an array using d3 histogram
 * @param arr the data array
 * @param indices array data indices
 * @param acc accessor function
 * @param range the total value range
 * @param bins the number of bins
 * @returns {{min: number, max: number, count: number, hist: histogram.Bin<number>[]}}
 */
export function computeStats(arr: any[], indices: number[], acc: (row: any, index: number) => number, range?: [number, number], bins?: number): IStatistics {
  if (arr.length === 0) {
    return {
      min: NaN,
      max: NaN,
      mean: NaN,
      count: 0,
      maxBin: 0,
      hist: []
    };
  }
  const indexAccessor = (a: any, i: number) => acc(a, indices[i]);
  const hist = d3.layout.histogram().value(indexAccessor);
  if (range) {
    hist.range(() => range);
  }
  if (bins) {
    hist.bins(bins);
  } else {
    hist.bins(getNumberOfBins(arr.length));
  }
  const ex = d3.extent(arr, indexAccessor);
  const histData = hist(arr);
  return {
    min: ex[0],
    max: ex[1],
    mean: d3.mean(arr, indexAccessor),
    count: arr.length,
    maxBin: Math.max(...histData.map((d) => d.y)),
    hist: histData
  };
}

/**
 * computes a categorical histogram
 * @param arr the data array
 * @param indices the data array data indices
 * @param acc the accessor
 * @param categories the list of known categories
 * @returns {{hist: {cat: string, y: number}[]}}
 */
export function computeHist(arr: any[], indices: number[], acc: (row: any, index: number) => string[], categories: string[]): ICategoricalStatistics {
  const m = new Map<string, number>();
  categories.forEach((cat) => m.set(cat, 0));

  arr.forEach((a, i) => {
    const vs = acc(a, indices[i]);
    if (vs == null) {
      return;
    }
    vs.forEach((v) => {
      m.set(v, (m.get(v) || 0) + 1);
    });
  });
  const entries: { cat: string; y: number }[] = [];
  m.forEach((v, k) => entries.push({cat: k, y: v}));
  return {
    maxBin: Math.max(...entries.map((d) => d.y)),
    hist: entries
  };
}
