import {Category, SupportType, toolbar} from './annotations';
import {IDataRow, IGroup} from './interfaces';
import ValueColumn, {IValueColumnDesc} from './ValueColumn';

/**
 * factory for creating a description creating a rank column
 * @param label
 * @returns {{type: string, label: string}}
 */
export function createDetailDesc(label: string = 'Detail Checkboxes') {
  return {type: 'detail', label, fixed: true};
}

export interface IDetailColumnDesc extends IValueColumnDesc<boolean> {
  /**
   * setter for selecting/deselecting the given row
   */
  setter(row: IDataRow, value: boolean): void;

  /**
   * setter for selecting/deselecting the given row
   */
  setterAll(rows: IDataRow[], value: boolean): void;
}

/**
 * a checkbox column for selections
 */
@SupportType()
@toolbar('sort', 'stratify', 'selectionToOverviewDetail', 'overviewDetailToSelection')
@Category('support')
export default class OverviewDetailColumn extends ValueColumn<boolean> {
  private static DETAILED_GROUP: IGroup = {
    name: 'Detailed',
    color: 'blue'
  };
  private static NOT_DETAILED_GROUP: IGroup = {
    name: 'Undetailed',
    color: 'gray'
  };
  static readonly EVENT_DETAIL = 'detail';

  constructor(id: string, desc: Readonly<IDetailColumnDesc>) {
    super(id, desc);
    this.setDefaultWidth(20);
  }

  get frozen() {
    return this.desc.frozen !== false;
  }

  protected createEventList() {
    return super.createEventList().concat([OverviewDetailColumn.EVENT_DETAIL]);
  }

  setValue(row: IDataRow, value: boolean) {
    const old = this.getValue(row);
    if (old === value) {
      return true;
    }
    return this.setImpl(row, value);
  }

  setValues(rows: IDataRow[], value: boolean) {
    if (rows.length === 0) {
      return;
    }
    if ((<IDetailColumnDesc>this.desc).setterAll) {
      (<IDetailColumnDesc>this.desc).setterAll(rows, value);
    }
    this.fire(OverviewDetailColumn.EVENT_DETAIL, rows[0], value, rows);
    return true;
  }

  private setImpl(row: IDataRow, value: boolean) {
    if ((<IDetailColumnDesc>this.desc).setter) {
      (<IDetailColumnDesc>this.desc).setter(row, value);
    }
    this.fire(OverviewDetailColumn.EVENT_DETAIL, row, value);
    return true;
  }

  toggleValue(row: IDataRow) {
    const old = this.getValue(row);
    this.setImpl(row, !old);
    return !old;
  }

  compare(a: IDataRow, b: IDataRow) {
    const va = this.getValue(a) === true;
    const vb = this.getValue(b) === true;
    return va === vb ? 0 : (va < vb ? -1 : +1);
  }

  group(row: IDataRow) {
    const isSelected = this.getValue(row);
    return isSelected ? OverviewDetailColumn.DETAILED_GROUP : OverviewDetailColumn.NOT_DETAILED_GROUP;  }
}
