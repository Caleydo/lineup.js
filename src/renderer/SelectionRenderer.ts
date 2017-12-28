import SelectionColumn from '../model/SelectionColumn';
import {IDOMCellRenderer, IDOMGroupRenderer} from './IDOMCellRenderers';
import {ICanvasRenderContext} from './RendererContexts';
import ICanvasCellRenderer, {ICanvasGroupRenderer} from './ICanvasCellRenderer';
import {clipText} from '../utils';
import ICellRendererFactory from './ICellRendererFactory';
import {IDataRow, IGroup} from '../model/interfaces';
import Column from '../model/Column';

export default class SelectionRenderer implements ICellRendererFactory {
  readonly title = 'Default';

  canRender(col: Column) {
    return col instanceof SelectionColumn;
  }

  createDOM(col: SelectionColumn): IDOMCellRenderer {
    return {
      template: `<div></div>`,
      update: (n: HTMLElement, d: IDataRow) => {
        n.onclick = function (event) {
          event.preventDefault();
          event.stopPropagation();
          col.toggleValue(d);
        };
      }
    };
  }

  createCanvas(col: SelectionColumn, context: ICanvasRenderContext): ICanvasCellRenderer {
    return (ctx: CanvasRenderingContext2D, d: IDataRow) => {
      const bak = ctx.font;
      ctx.font = '10pt FontAwesome'; // TODO
      clipText(ctx, col.getValue(d) ? '\uf046' : '\uf096', 0, 0, context.colWidth(col), context.textHints);
      ctx.font = bak;
    };
  }

  createGroupCanvas(col: SelectionColumn, context: ICanvasRenderContext): ICanvasGroupRenderer {
    return (ctx: CanvasRenderingContext2D, group: IGroup, rows: IDataRow[]) => {
      const selected = rows.reduce((act, r) => col.getValue(r) ? act + 1 : act, 0);
      clipText(ctx, String(selected), 0, context.groupHeight(group), col.getWidth(), context.textHints);
    };
  }

  createGroupDOM(col: SelectionColumn): IDOMGroupRenderer {
    return {
      template: `<div></div>`,
      update: (n: HTMLElement, _group: IGroup, rows: IDataRow[]) => {
        const selected = rows.reduce((act, r) => col.getValue(r) ? act + 1 : act, 0);
        const all = selected >= rows.length / 2;
        if (all) {
          n.classList.add('lu-group-selected');
        } else {
          n.classList.remove('lu-group-selected');
        }
        n.onclick = function (event) {
          event.preventDefault();
          event.stopPropagation();
          const value = n.classList.toggle('lu-group-selected');
          col.setValues(rows, value);
        };
      }
    };
  }
}
