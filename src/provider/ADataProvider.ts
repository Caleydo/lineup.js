/**
 * Created by Samuel Gratzl on 14.08.2015.
 */

import {
  createActionDesc,
  createRankDesc,
  createSelectionDesc,
  createStackDesc,
  createAggregateDesc,
  IColumnDesc,
  isSupportType,
  models
} from '../model';
import Column, {ICategoricalStatistics, IStatistics} from '../model/Column';
import Ranking from '../model/Ranking';
import RankColumn from '../model/RankColumn';
import StackColumn from '../model/StackColumn';
import {ICategoricalColumn} from '../model/CategoricalColumn';
import {INumberColumn} from '../model/INumberColumn';
import {AEventDispatcher, debounce, suffix} from '../utils';
import {IValueColumnDesc} from '../model/ValueColumn';
import {ISelectionColumnDesc} from '../model/SelectionColumn';
import {IGroup, IOrderedGroup, toGroupID, unifyParents} from '../model/Group';
import AggregateGroupColumn, {IAggregateGroupColumnDesc} from '../model/AggregateGroupColumn';
import OrderedSet from './OrderedSet';
import {IExportOptions, exportRanking} from './utils';
export {IExportOptions} from './utils';

/**
 * a data row for rendering
 */
export interface IDataRow {
  /**
   * the value
   */
  v: any;
  /**
   * the underlying data index
   */
  dataIndex: number;
}


export interface IStatsBuilder {
  stats(col: INumberColumn): Promise<IStatistics> | IStatistics;

  hist(col: ICategoricalColumn): Promise<ICategoricalStatistics> | ICategoricalStatistics;
}

export interface IDataProviderOptions {
  columnTypes: { [columnType: string]: typeof Column };

  /**
   * allow multiple selected rows
   * default: true
   */
  multiSelection: boolean;

  /**
   *  enables grouping / stratification features
   */
  grouping: boolean;
}

export interface IDataProvider extends AEventDispatcher {
  takeSnapshot(col: Column): void;

  selectAllOf(ranking: Ranking): void;

  getSelection(): number[];

  setSelection(dataIndices: number[]): void;

  toggleSelection(dataIndex: number, additional?: boolean): boolean;

  isSelected(dataIndex: number): boolean;

  removeRanking(ranking: Ranking): void;

  ensureOneRanking(): void;

  find(id: string): Column | null;

  clone(col: Column): Column;

  create(desc: IColumnDesc): Column | null;

  toDescRef(desc: IColumnDesc): any;

  fromDescRef(ref: any): IColumnDesc;

  mappingSample(col: Column): Promise<number[]> | number[];

  searchAndJump(search: string | RegExp, col: Column): void;

  getRankings(): Ranking[];

  getLastRanking(): Ranking;

  getColumns(): IColumnDesc[];

  isAggregated(ranking: Ranking, group: IGroup): boolean;

  aggregateAllOf(ranking: Ranking, aggregateAll: boolean): void;
}


/**
 * a basic data provider holding the data and rankings
 */
abstract class ADataProvider extends AEventDispatcher implements IDataProvider {
  static readonly EVENT_SELECTION_CHANGED = 'selectionChanged';
  static readonly EVENT_ADD_COLUMN = Ranking.EVENT_ADD_COLUMN;
  static readonly EVENT_REMOVE_COLUMN = Ranking.EVENT_REMOVE_COLUMN;
  static readonly EVENT_ADD_RANKING = 'addRanking';
  static readonly EVENT_REMOVE_RANKING = 'removeRanking';
  static readonly EVENT_DIRTY = Ranking.EVENT_DIRTY;
  static readonly EVENT_DIRTY_HEADER = Ranking.EVENT_DIRTY_HEADER;
  static readonly EVENT_DIRTY_VALUES = Ranking.EVENT_DIRTY_VALUES;
  static readonly EVENT_ORDER_CHANGED = Ranking.EVENT_ORDER_CHANGED;
  static readonly EVENT_ADD_DESC = 'addDesc';
  static readonly EVENT_CLEAR_DESC = 'clearDesc';
  static readonly EVENT_JUMP_TO_NEAREST = 'jumpToNearest';
  static readonly EVENT_GROUP_AGGREGATION_CHANGED = AggregateGroupColumn.EVENT_AGGREGATE;

  /**
   * all rankings
   * @type {Array}
   * @private
   */
  private rankings: Ranking[] = [];
  /**
   * the current selected indices
   * @type {OrderedSet}
   */
  private readonly selection = new OrderedSet<number>();

  //ranking.id@group.name
  private aggregations = new Set<string>();

  private uid = 0;

  /**
   * lookup map of a column type to its column implementation
   */
  readonly columnTypes: { [columnType: string]: typeof Column };

  private readonly multiSelections: boolean;
  private readonly groupings: boolean;

  constructor(options: Partial<IDataProviderOptions> = {}) {
    super();
    this.columnTypes = Object.assign(models(), options.columnTypes || {});
    this.multiSelections = options.multiSelection !== false;
    this.groupings = options.grouping === true;
  }

  /**
   * events:
   *  * column changes: addColumn, removeColumn
   *  * ranking changes: addRanking, removeRanking
   *  * dirty: dirty, dirtyHeder, dirtyValues
   *  * selectionChanged
   * @returns {string[]}
   */
  protected createEventList() {
    return super.createEventList().concat([
      ADataProvider.EVENT_ADD_COLUMN, ADataProvider.EVENT_REMOVE_COLUMN,
      ADataProvider.EVENT_ADD_RANKING, ADataProvider.EVENT_REMOVE_RANKING,
      ADataProvider.EVENT_DIRTY, ADataProvider.EVENT_DIRTY_HEADER, ADataProvider.EVENT_DIRTY_VALUES,
      ADataProvider.EVENT_ORDER_CHANGED, ADataProvider.EVENT_SELECTION_CHANGED,
      ADataProvider.EVENT_ADD_DESC, ADataProvider.EVENT_CLEAR_DESC,
      ADataProvider.EVENT_JUMP_TO_NEAREST, ADataProvider.EVENT_GROUP_AGGREGATION_CHANGED]);
  }

  /**
   * returns a list of all known column descriptions
   * @returns {Array}
   */
  abstract getColumns(): IColumnDesc[];

  /**
   * adds a new ranking
   * @param existing an optional existing ranking to clone
   * @return the new ranking
   */
  pushRanking(existing?: Ranking): Ranking {

    const r = this.cloneRanking(existing);
    if (!this.groupings) {
      r.setMaxGroupColumns(0);
    }

    this.insertRanking(r);
    return r;
  }

  takeSnapshot(col: Column): Ranking {
    const r = this.cloneRanking();
    r.push(this.clone(col));
    this.insertRanking(r);
    return r;
  }

  insertRanking(r: Ranking, index = this.rankings.length) {
    this.rankings.splice(index, 0, r);
    this.forward(r, ...suffix('.provider', Ranking.EVENT_ADD_COLUMN, Ranking.EVENT_REMOVE_COLUMN,
      Ranking.EVENT_DIRTY, Ranking.EVENT_DIRTY_HEADER,
      Ranking.EVENT_ORDER_CHANGED, Ranking.EVENT_DIRTY_VALUES));
    const that = this;
    //delayed reordering per ranking
    r.on(`${Ranking.EVENT_DIRTY_ORDER}.provider`, debounce(function (this: { source: Ranking }) {
      that.triggerReorder(this.source);
    }, 100));
    this.fire([ADataProvider.EVENT_ADD_RANKING, ADataProvider.EVENT_DIRTY_HEADER, ADataProvider.EVENT_DIRTY_VALUES, ADataProvider.EVENT_DIRTY], r, index);
    this.triggerReorder(r);
  }

  protected triggerReorder(ranking: Ranking) {
    Promise.resolve(this.sort(ranking)).then((order) => {
      unifyParents(order);
      ranking.setGroups(order);
    });
  }

  /**
   * removes a ranking from this data provider
   * @param ranking
   * @returns {boolean}
   */
  removeRanking(ranking: Ranking) {
    const i = this.rankings.indexOf(ranking);
    if (i < 0) {
      return false;
    }
    this.unforward(ranking, ...suffix('.provider', Ranking.EVENT_ADD_COLUMN, Ranking.EVENT_REMOVE_COLUMN,
      Ranking.EVENT_DIRTY, Ranking.EVENT_DIRTY_HEADER,
      Ranking.EVENT_ORDER_CHANGED, Ranking.EVENT_DIRTY_VALUES));
    this.rankings.splice(i, 1);
    ranking.on(`${Ranking.EVENT_DIRTY_ORDER}.provider`, null);
    this.cleanUpRanking(ranking);
    this.fire([ADataProvider.EVENT_REMOVE_RANKING, ADataProvider.EVENT_DIRTY_HEADER, ADataProvider.EVENT_DIRTY_VALUES, ADataProvider.EVENT_DIRTY], ranking, i);
    return true;
  }

  /**
   * removes all rankings
   */
  clearRankings() {
    this.rankings.forEach((ranking) => {
      this.unforward(ranking, ...suffix('.provider', Ranking.EVENT_ADD_COLUMN, Ranking.EVENT_REMOVE_COLUMN,
        Ranking.EVENT_DIRTY, Ranking.EVENT_DIRTY_HEADER,
        Ranking.EVENT_ORDER_CHANGED, Ranking.EVENT_DIRTY_VALUES));
      ranking.on(`${Ranking.EVENT_DIRTY_ORDER}.provider`, null);
      this.cleanUpRanking(ranking);
    });
    this.rankings = [];
    this.fire([ADataProvider.EVENT_REMOVE_RANKING, ADataProvider.EVENT_DIRTY_HEADER, ADataProvider.EVENT_DIRTY_VALUES, ADataProvider.EVENT_DIRTY], null);
  }

  /**
   * returns a list of all current rankings
   * @returns {Ranking[]}
   */
  getRankings() {
    return this.rankings.slice();
  }

  /**
   * returns the last ranking for quicker access
   * @returns {Ranking}
   */
  getLastRanking() {
    return this.rankings[this.rankings.length - 1];
  }

  ensureOneRanking() {
    if (this.rankings.length === 0) {
      this.pushRanking();
    }
  }

  /**
   * hook method for cleaning up a ranking
   * @param _ranking
   */
  cleanUpRanking(_ranking: Ranking) {
    //nothing to do
  }

  /**
   * abstract method for cloning a ranking
   * @param existing
   * @returns {null}
   */
  abstract cloneRanking(existing?: Ranking): Ranking;

  /**
   * adds a column to a ranking described by its column description
   * @param ranking the ranking to add the column to
   * @param desc the description of the column
   * @return {Column} the newly created column or null
   */
  push(ranking: Ranking, desc: IColumnDesc): Column | null {
    const r = this.create(desc);
    if (r) {
      ranking.push(r);
      return r;
    }
    return null;
  }

  /**
   * adds a column to a ranking described by its column description
   * @param ranking the ranking to add the column to
   * @param index the position to insert the column
   * @param desc the description of the column
   * @return {Column} the newly created column or null
   */
  insert(ranking: Ranking, index: number, desc: IColumnDesc) {
    const r = this.create(desc);
    if (r) {
      ranking.insert(r, index);
      return r;
    }
    return null;
  }

  /**
   * creates a new unique id for a column
   * @returns {string}
   */
  private nextId() {
    return `col${this.uid++}`;
  }

  protected abstract rankAccessor(row: any, index: number, id: string, desc: IColumnDesc, ranking: Ranking): number;

  private fixDesc(desc: IColumnDesc) {
    //hacks for provider dependent descriptors
    if (desc.type === 'rank') {
      (<IValueColumnDesc<number>>desc).accessor = this.rankAccessor.bind(this);
    } else if (desc.type === 'selection') {
      (<ISelectionColumnDesc>desc).accessor = (_row: any, index: number) => this.isSelected(index);
      (<ISelectionColumnDesc>desc).setter = (_row: any, index: number, value: boolean) => value ? this.select(index) : this.deselect(index);
    } else if (desc.type === 'aggregate') {
      (<IAggregateGroupColumnDesc>desc).isAggregated = (ranking: Ranking, group: IGroup) => this.isAggregated(ranking, group);
      (<IAggregateGroupColumnDesc>desc).setAggregated = (ranking: Ranking, group: IGroup, value: boolean) => this.setAggregated(ranking, group, value);
    }
  }

  /**
   * creates an internal column model out of the given column description
   * @param desc
   * @returns {Column] the new column or null if it can't be created
   */
  create(desc: IColumnDesc): Column | null {
    this.fixDesc(desc);
    //find by type and instantiate
    const type = this.columnTypes[desc.type];
    if (type) {
      return new type(this.nextId(), desc);
    }
    return null;
  }

  /**
   * clones a column by dumping and restoring
   * @param col
   * @returns {Column}
   */
  clone(col: Column) {
    const dump = this.dumpColumn(col);
    return this.restoreColumn(dump);
  }

  /**
   * restores a column from a dump
   * @param dump
   * @returns {Column}
   */
  restoreColumn(dump: any): Column {
    const create = (d: any) => {
      const desc = this.fromDescRef(d.desc);
      const type = this.columnTypes[desc.type];
      this.fixDesc(desc);
      const c = new type('', desc);
      c.restore(d, create);
      c.assignNewId(this.nextId.bind(this));
      return c;
    };
    return create(dump);
  }

  /**
   * finds a column in all rankings returning the first match
   * @param idOrFilter by id or by a filter function
   * @returns {Column}
   */
  find(idOrFilter: string | ((col: Column) => boolean)): Column | null {
    //convert to function
    const filter = typeof(idOrFilter) === 'string' ? (col: Column) => col.id === idOrFilter : idOrFilter;

    for (const ranking of this.rankings) {
      const r = ranking.find(filter);
      if (r) {
        return r;
      }
    }
    return null;
  }


  /**
   * dumps this whole provider including selection and the rankings
   * @returns {{uid: number, selection: number[], rankings: *[]}}
   */
  dump(): any {
    return {
      uid: this.uid,
      selection: this.getSelection(),
      aggregations: Array.from(this.aggregations),
      rankings: this.rankings.map((r) => r.dump(this.toDescRef))
    };
  }

  /**
   * dumps a specific column
   */
  dumpColumn(col: Column) {
    return col.dump(this.toDescRef);
  }

  /**
   * for better dumping describe reference, by default just return the description
   */
  toDescRef(desc: any): any {
    return desc;
  }

  /**
   * inverse operation of toDescRef
   */
  fromDescRef(descRef: any): any {
    return descRef;
  }

  private createHelper = (d: any) => {
    //factory method for restoring a column
    const desc = this.fromDescRef(d.desc);
    let c = null;
    if (desc && desc.type) {
      this.fixDesc(d.desc);
      const type = this.columnTypes[desc.type];
      c = new type(d.id, desc);
      c.restore(d, this.createHelper);
    }
    return c;
  };

  restoreRanking(dump: any) {
    const ranking = this.cloneRanking();
    ranking.restore(dump, this.createHelper);
    //if no rank column add one
    if (!ranking.children.some((d) => d instanceof RankColumn)) {
      ranking.insert(this.create(createRankDesc())!, 0);
    }
    const idGenerator = this.nextId.bind(this);
    ranking.children.forEach((c) => c.assignNewId(idGenerator));

    return ranking;
  }

  restore(dump: any) {
    //clean old
    this.clearRankings();

    //restore selection
    this.uid = dump.uid || 0;
    if (dump.selection) {
      dump.selection.forEach((s: number) => this.selection.add(s));
    }
    if (dump.aggregations) {
      this.aggregations.clear();
      dump.aggregations.forEach((a: string) => this.aggregations.add(a));
    }


    //restore rankings
    if (dump.rankings) {
      dump.rankings.forEach((r: any) => {
        const ranking = this.cloneRanking();
        ranking.restore(r, this.createHelper);
        //if no rank column add one
        if (!ranking.children.some((d) => d instanceof RankColumn)) {
          ranking.insert(this.create(createRankDesc())!, 0);
        }
        this.insertRanking(ranking);
      });
    }
    if (dump.layout) { //we have the old format try to create it
      Object.keys(dump.layout).forEach((key) => {
        this.deriveRanking(dump.layout[key]);
      });
    }
    //assign new ids
    const idGenerator = this.nextId.bind(this);
    this.rankings.forEach((r) => {
      r.children.forEach((c) => c.assignNewId(idGenerator));
    });
  }

  abstract findDesc(ref: string): IColumnDesc | null;

  /**
   * generates a default ranking by using all column descriptions ones
   */
  deriveDefault() {
    if (this.rankings.length > 0) {
      //no default if we have a ranking
      return;
    }
    const r = this.pushRanking();
    this.getColumns().forEach((col) => {
      if (!isSupportType(col)) {
        this.push(r, col);
      }
    });
  }

  /**
   * derives a ranking from an old layout bundle format
   * @param bundle
   */
  private deriveRanking(bundle: any[]) {
    const ranking = this.cloneRanking();
    ranking.clear();
    const toCol = (column: any) => {
      switch (column.type) {
        case 'rank':
          return this.create(createRankDesc());
        case 'selection':
          return this.create(createSelectionDesc());
        case 'aggregate':
          return this.create(createAggregateDesc());
        case 'actions':
          const actions = this.create(createActionDesc(column.label || 'actions'))!;
          actions.restore(column, this.createHelper);
          return actions;
        case 'stacked':
          //create a stacked one
          const stacked = <StackColumn>this.create(createStackDesc(column.label || 'Combined'))!;
          (column.children || []).forEach((col: any) => {
            const c = toCol(col);
            if (c) {
              stacked.push(c);
            }
          });
          return stacked;
        default: {
          const desc = this.findDesc(column.column);
          if (desc) {
            const r = this.create(desc);
            column.label = column.label || desc.label || (<any>desc).column;
            if (r) {
              r.restore(column, this.createHelper);
            }
            return r;
          }
          return null;
        }
      }
    };
    bundle.forEach((column) => {
      const col = toCol(column);
      if (col) {
        ranking.push(col);
      }
    });
    //if no rank column add one
    if (!ranking.children.some((d) => d instanceof RankColumn)) {
      ranking.insert(this.create(createRankDesc())!, 0);
    }
    this.insertRanking(ranking);
    return ranking;
  }

  isAggregated(ranking: Ranking, group: IGroup) {
    let g: IGroup|undefined|null = group;
    while (g) {
      const key = `${ranking.id}@${toGroupID(g)}`;
      if (this.aggregations.has(key)) {
        return true;
      }
      g = g.parent;
    }
    return false;
  }

  setAggregated(ranking: Ranking, group: IGroup, value: boolean) {
    const key = `${ranking.id}@${toGroupID(group)}`;
    if (value === this.aggregations.has(key)) {
      return;
    }
    if (value) {
      this.aggregations.add(key);
    } else {
      this.aggregations.delete(key);
    }
    this.fire([ADataProvider.EVENT_GROUP_AGGREGATION_CHANGED, ADataProvider.EVENT_DIRTY_VALUES, ADataProvider.EVENT_DIRTY], ranking, group, value);
  }

  aggregateAllOf(ranking: Ranking, aggregateAll: boolean) {
    const groups = ranking.getGroups();
    groups.forEach((group) => {
      const key = `${ranking.id}@${toGroupID(group)}`;
      if (aggregateAll) {
        this.aggregations.add(key);
      } else {
        this.aggregations.delete(key);
      }
    });
    this.fire([ADataProvider.EVENT_GROUP_AGGREGATION_CHANGED, ADataProvider.EVENT_DIRTY_VALUES, ADataProvider.EVENT_DIRTY], ranking, groups, aggregateAll);
  }

  /**
   * sorts the given ranking and eventually return a ordering of the data items
   * @param ranking
   * @return {Promise<any>}
   */
  abstract sort(ranking: Ranking): Promise<IOrderedGroup[]> | IOrderedGroup[];

  /**
   * returns a view in the order of the given indices
   * @param indices
   * @return {Promise<any>}
   */
  abstract view(indices: number[]): Promise<any[]> | any[];

  abstract fetch(orders: number[][]): (Promise<IDataRow>|IDataRow)[][];

  /**
   * returns a data sample used for the mapping editor
   * @param col
   * @return {Promise<any>}
   */
  abstract mappingSample(col: Column): Promise<number[]> | number[];

  /**
   * helper for computing statistics
   * @param indices
   * @returns {{stats: (function(INumberColumn): *), hist: (function(ICategoricalColumn): *)}}
   */
  abstract stats(indices: number[]): IStatsBuilder;

  /**
   * is the given row selected
   * @param index
   * @return {boolean}
   */
  isSelected(index: number) {
    return this.selection.has(index);
  }

  /**
   * also select the given row
   * @param index
   */
  select(index: number) {
    if (this.selection.has(index)) {
      return; //no change
    }
    if (!this.multiSelections && this.selection.size > 0) {
      this.selection.clear();
    }
    this.selection.add(index);
    this.fire(ADataProvider.EVENT_SELECTION_CHANGED, this.getSelection());
  }

  /**
   * hook for selecting elements matching the given arguments
   * @param search
   * @param col
   */
  abstract searchAndJump(search: string | RegExp, col: Column): void;

  jumpToNearest(indices: number[]) {
    if (indices.length === 0) {
      return;
    }
    this.fire(ADataProvider.EVENT_JUMP_TO_NEAREST, indices);
  }

  /**
   * also select all the given rows
   * @param indices
   */
  selectAll(indices: number[]) {
    if (indices.every((i) => this.selection.has(i))) {
      return; //no change
    }
    if (!this.multiSelections) {
      this.selection.clear();
      indices = indices.slice(0, 1); //just the first one
    }
    indices.forEach((index) => {
      this.selection.add(index);
    });
    this.fire(ADataProvider.EVENT_SELECTION_CHANGED, this.getSelection());
  }

  selectAllOf(ranking: Ranking) {
    this.setSelection(ranking.getOrder());
  }

  /**
   * set the selection to the given rows
   * @param indices
   */
  setSelection(indices: number[]) {
    if (indices.length === 0) {
      return this.clearSelection();
    }
    if (this.selection.size === indices.length && indices.every((i) => this.selection.has(i))) {
      return; //no change
    }
    this.selection.clear();
    this.selectAll(indices);
  }

  /**
   * toggles the selection of the given data index
   * @param index
   * @param additional just this element or all
   * @returns {boolean} whether the index is currently selected
   */
  toggleSelection(index: number, additional = false) {
    if (this.isSelected(index)) {
      if (additional) {
        this.deselect(index);
      } else {
        this.clearSelection();
      }
      return false;
    }
    if (additional) {
      this.select(index);
    } else {
      this.setSelection([index]);
    }
    return true;
  }

  /**
   * deselect the given row
   * @param index
   */
  deselect(index: number) {
    if (!this.selection.has(index)) {
      return; //no change
    }
    this.selection.delete(index);
    this.fire(ADataProvider.EVENT_SELECTION_CHANGED, this.getSelection());
  }

  /**
   * returns a promise containing the selected rows
   * @return {Promise<any[]>}
   */
  selectedRows(): Promise<any[]> | any[] {
    if (this.selection.size === 0) {
      return [];
    }
    return this.view(this.getSelection());
  }

  /**
   * returns the currently selected indices
   * @returns {Array}
   */
  getSelection() {
    return Array.from(this.selection);
  }

  /**
   * clears the selection
   */
  clearSelection() {
    if (this.selection.size === 0) {
      return; //no change
    }
    this.selection.clear();
    this.fire(ADataProvider.EVENT_SELECTION_CHANGED, [], false);
  }

  /**
   * utility to export a ranking to a table with the given separator
   * @param ranking
   * @param options
   * @returns {Promise<string>}
   */
  exportTable(ranking: Ranking, options: Partial<IExportOptions> = {}) {
    return Promise.resolve(this.view(ranking.getOrder())).then((data) => exportRanking(ranking, data, options));
  }
}

export default ADataProvider;
