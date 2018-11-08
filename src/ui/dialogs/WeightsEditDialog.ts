import {round} from '../../internal';
import StackColumn from '../../model/StackColumn';
import ADialog, {IDialogContext} from './ADialog';
import {forEach, colorOf} from './utils';
import {cssClass} from '../../styles';

/** @internal */
export default class WeightsEditDialog extends ADialog {

  private readonly weights: number[];

  constructor(private readonly column: StackColumn, dialog: IDialogContext) {
    super(dialog, {
      fullDialog: true
    });

    this.weights = this.column.getWeights();
  }

  protected reset() {
    forEach(this.node, 'input[type=number]', (n: HTMLInputElement) => {
      const v = round(100 / this.weights.length, 2);
      n.value = String(v);
      (<HTMLElement>n.nextElementSibling!.firstElementChild!).style.width = `${v}%`;
    });
    this.column.setWeights(this.weights.slice().fill(100 / this.weights.length));
  }

  protected build(node: HTMLElement) {

    const children = this.column.children;
    node.insertAdjacentHTML('beforeend', `<div class="${cssClass('dialog-table')}">
        ${this.weights.map((weight, i) => `<div class="${cssClass('dialog-weights-table-entry')}>
          <input type="number" value="${round(weight * 100, 2)}" min="0" max="100" step="any">
          <span class="${cssClass('dialog-filter-color-bar')}">
            <span style="background-color: ${colorOf(children[i])}; width: ${round(weight * 100, 2)}%"></span>
          </span>
          ${children[i].label}
        </div>`).join('')}
    </div>`);
    this.forEach('input[type=number]', (d: HTMLInputElement) => {
      d.oninput = () => {
        (<HTMLElement>d.nextElementSibling!.firstElementChild!).style.width = `${d.value}%`;
      };
    });
  }

  submit() {
    const items = this.forEach('input[type=number]', (n: HTMLInputElement) => parseFloat(n.value) / 100);
    this.column.setWeights(items);
    return true;
  }
}
