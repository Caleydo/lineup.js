import ArrayColumn, {IArrayColumnDesc} from './ArrayColumn';
import {IDataRow} from './interfaces';
import {FIRST_IS_NAN} from './missing';

export declare type IBooleansColumnDesc = IArrayColumnDesc<boolean>;

export default class BooleansColumn extends ArrayColumn<boolean> {
  constructor(id: string, desc: Readonly<IBooleansColumnDesc>) {
    super(id, desc);
    this.setDefaultRenderer('upset');
  }

  compare(a: IDataRow, b: IDataRow) {
    const aVal = this.getValue(a);
    const bVal = this.getValue(b);
    if (aVal == null) {
      return bVal == null ? 0 : FIRST_IS_NAN;
    }
    if (bVal == null) {
      return FIRST_IS_NAN * -1;
    }

    const aCat = aVal.filter((x) => x).length;
    const bCat = bVal.filter((x) => x).length;
    return (aCat - bCat);
  }
}
