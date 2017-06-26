import ADialog from './ADialog';
import Column from '../model/Column';
import ADataProvider from '../provider/ADataProvider';
import {Selection} from 'd3-selection';

export interface IFilterDialog {
  new(column: Column, $header: Selection<HTMLElement, Column, any, any>, title: string, data: ADataProvider, idPrefix: string) : AFilterDialog<Column>;
}

abstract class AFilterDialog<T extends Column> extends ADialog {

  constructor(protected readonly column: T, attachment: Selection<HTMLElement, T, any, any>, title: string) {
    super(attachment, title);
  }

  markFiltered(filtered: boolean = false) {
    this.attachment.classed('filtered', filtered);
  }
}

export default AFilterDialog;
