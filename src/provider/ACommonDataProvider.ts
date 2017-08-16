/**
 * Created by sam on 04.11.2016.
 */

import {IColumnDesc, createRankDesc} from '../model';
import Ranking from '../model/Ranking';
import ADataProvider, {IDataProviderOptions} from './ADataProvider';
import {IOrderedGroup} from '../model/Group';


function isComplexAccessor(column: any) {
  // something like a.b or a[4]
  return typeof column === 'string' && column.indexOf('.') >= 0;
}

function resolveComplex(column: string, row: any) {
  const resolve = (obj: any, col: string) => {
    if (obj === undefined) {
      return obj; // propagate invalid values
    }
    if (/\d+/.test(col)) { // index
      return obj[+col];
    }
    return obj[col];
  };
  return column.split('.').reduce(resolve, row);
}

function rowGetter(row: any, _index: number, _id: string, desc: any) {
  const column = desc.column;
  if (isComplexAccessor(column)) {
    return resolveComplex(<string>column, row);
  }
  return row[column];
}

/**
 * common base implementation of a DataProvider with a fixed list of column descriptions
 */
abstract class ACommonDataProvider extends ADataProvider {

  private rankingIndex = 0;

  /**
   * the local ranking orders
   */
  private readonly ranks = new Map<string, IOrderedGroup[]>();

  constructor(private columns: IColumnDesc[] = [], options: Partial<IDataProviderOptions> = {}) {
    super(options);
    //generate the accessor
    columns.forEach((d: any) => {
      d.accessor = d.accessor || rowGetter;
      d.label = d.label || d.column;
    });
  }

  protected rankAccessor(row: any, index: number, id: string, desc: IColumnDesc, ranking: Ranking) {
    const groups = this.ranks.get(ranking.id);
    let acc = 0;
    for(const group of groups) {
      const rank = group.order.indexOf(index);
      if (rank >= 0) {
        return acc + rank + 1; // starting with 1
      }
      acc += group.order.length;
    }
    return -1;
  }

  /**
   * returns the maximal number of nested/hierarchical sorting criteria
   * @return {number}
   */
  protected getMaxNestedSortingCriteria() {
    return 1;
  }

  cloneRanking(existing?: Ranking) {
    const id = this.nextRankingId();
    const clone = new Ranking(id, this.getMaxNestedSortingCriteria());

    if (existing) { //copy the ranking of the other one
      //copy the ranking
      this.ranks.set(id, this.ranks.get(existing.id)!);
      //TODO better cloning
      existing.children.forEach((child) => {
        this.push(clone, child.desc);
      });
    } else {
      clone.push(this.create(createRankDesc())!);
    }

    return clone;
  }

  cleanUpRanking(ranking: Ranking) {
    //delete all stored information
    this.ranks.delete(ranking.id);
  }

  sort(ranking: Ranking): Promise<IOrderedGroup[]> {
    //use the server side to sort
    const r = this.sortImpl(ranking);
    if (Array.isArray(r)) {
      //store the result
      this.ranks.set(ranking.id, argsort);
      return argsort;
    });
  }

  protected abstract sortImpl(ranking: Ranking): Promise<IOrderedGroup[]>|IOrderedGroup[];

  /**
   * adds another column description to this data provider
   * @param column
   */
  pushDesc(column: IColumnDesc) {
    const d: any = column;
    d.accessor = d.accessor || rowGetter;
    d.label = column.label || d.column;
    this.columns.push(column);
    this.fire(ADataProvider.EVENT_ADD_DESC, d);
  }

  getColumns(): IColumnDesc[] {
    return this.columns.slice();
  }

  findDesc(ref: string) {
    return this.columns.filter((c) => (<any>c).column === ref)[0];
  }

  /**
   * identify by the tuple type@columnname
   * @param desc
   * @returns {string}
   */
  toDescRef(desc: any): any {
    return typeof desc.column !== 'undefined' ? `${desc.type}@${desc.column}` : desc;
  }

  fromDescRef(descRef: any): any {
    if (typeof(descRef) === 'string') {
      return this.columns.find((d: any) => `${d.type}@${d.column}` === descRef);
    }
    return descRef;
  }

  restore(dump: any) {
    super.restore(dump);
    this.rankingIndex = 1 + Math.max(...this.getRankings().map((r) => +r.id.substring(4)));
  }

  nextRankingId() {
    return `rank${this.rankingIndex++}`;
  }
}

export default ACommonDataProvider;
