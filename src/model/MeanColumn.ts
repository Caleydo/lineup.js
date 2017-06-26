/**
 * Created by sam on 04.11.2016.
 */

import CompositeNumberColumn from './CompositeNumberColumn';

/**
 * factory for creating a description creating a mean column
 * @param label
 * @returns {{type: string, label: string}}
 */
export function createDesc(label: string = 'Mean') {
  return {type: 'mean', label};
}

export default class MeanColumn extends CompositeNumberColumn {

  protected compute(row: any, index: number) {
    if (this._children.length === 0) {
      return 0;
    }
    return (this._children.reduce((act, d) => act + d.getValue(row, index), 0) / this._children.length);
  }

  /**
   * describe the column if it is a sorting criteria
   * @param toId helper to convert a description to an id
   * @return {string} json compatible
   */
  toSortingDesc(toId: (desc: any) => string): any {
    return {
      operation: 'avg',
      operands: this._children.map((c) => c.toSortingDesc(toId))
    };
  }
}
