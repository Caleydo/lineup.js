import ADialog from './ADialog';

/** @internal */
export interface IInputNumberOptions {
  min: number;
  max: number;
  step: number|'any';
  value: number;
  label: string|null;
}

/** @internal */
export default class InputNumberDialog extends ADialog {

  private readonly ioptions: Readonly<IInputNumberOptions> = {
    min: NaN,
    max: NaN,
    step: 'any',
    value: NaN,
    label: null
  };
  constructor(attachment: HTMLElement, private readonly callback: (value: number)=>void, options: Partial<IInputNumberOptions> = {}) {
    super(attachment, {
      hideOnMoveOutside: true
    });
    Object.assign(this.ioptions, options);
  }

  protected build(node: HTMLElement) {
    const o = this.ioptions;
    node.insertAdjacentHTML('beforeend', `
     <input type="number" value="${isNaN(o.value) ? '' : String(o.value)}" required autofocus placeholder="${o.label ? o.label : 'enter number'}" ${isNaN(o.min) ? '' : ` min="${o.min}"`} ${isNaN(o.max) ? '' : ` max="${o.max}"`} step="${o.step}">
    `);
  }

  submit() {
    this.callback(parseFloat(this.findInput('input[type=number]').value));
    return true;
  }
}
