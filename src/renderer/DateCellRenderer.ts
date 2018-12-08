import {IDataRow, IOrderedGroup} from '../model';
import Column from '../model/Column';
import IRenderContext, {ICellRendererFactory, IGroupCellRenderer, ISummaryRenderer, ICellRenderer} from './interfaces';
import {renderMissingDOM} from './missing';
import {noop, noRenderer, setText, exampleText} from './utils';
import DateColumn, {choose} from '../model/DateColumn';

/** @internal */
export default class DateCellRenderer implements ICellRendererFactory {
  title = 'Date';
  groupTitle = 'Date';
  summaryTitle = 'Date';

  canRender(col: Column) {
    return col instanceof DateColumn;
  }

  create(col: DateColumn): ICellRenderer {
    return {
      template: `<div> </div>`,
      update: (n: HTMLDivElement, d: IDataRow) => {
        renderMissingDOM(n, col, d);
        setText(n, col.getLabel(d));
      },
      render: noop
    };
  }

  createGroup(col: DateColumn, context: IRenderContext): IGroupCellRenderer {
    return {
      template: `<div> </div>`,
      update: (n: HTMLDivElement, group: IOrderedGroup) => {
        const isGrouped = col.isGroupedBy() >= 0;
        if (isGrouped) {
          return context.tasks.groupRows(col, group, (rows) => choose(rows, col.getDateGrouper(), col)).then((chosen) => {
            if (typeof chosen !== 'symbol') {
              setText(n, chosen.name);
            }
          });
        }
        return context.tasks.groupExampleRows(col, group, (sample) => exampleText(col, sample)).then((text) => {
          if (typeof text !== 'symbol') {
            setText(n, text);
          }
        });
      }
    };
  }

  createSummary(): ISummaryRenderer {
    return noRenderer;
  }
}
