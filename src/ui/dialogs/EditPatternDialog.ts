import StringColumn from '../../model/StringColumn';
import StringMapColumn from '../../model/StringMapColumn';
import StringsColumn from '../../model/StringsColumn';
import ADialog from './ADialog';

export default class EditPatternDialog extends ADialog {

  constructor(private readonly column: StringColumn | StringsColumn | StringMapColumn, attachment: HTMLElement, private readonly idPrefix: string) {
    super(attachment, {
      fullDialog: true
    });
  }

  protected build(node: HTMLElement) {
    const templates = this.column.patternTemplates;
    node.insertAdjacentHTML('beforeend', `<h4>Edit Pattern (access via $\{value}, $\{item})</h4><input
        type="text"
        size="30"
        value="${this.column.getPattern()}"
        required
        autofocus
        placeholder="pattern (access via $\{value}, $\{item})"
        ${templates.length > 0 ? `list="ui${this.idPrefix}lineupPatternList"` : ''}
      >`);
    if (templates.length > 0) {
      node.insertAdjacentHTML('beforeend', `<datalist id="ui${this.idPrefix}lineupPatternList">${templates.map((t) => `<option value="${t}">`)}</datalist>`);
    }
  }

  protected reset() {
    this.node.querySelector('input')!.value = '';
    this.column.setPattern('');
  }

  protected submit() {
    const newValue = this.node.querySelector('input')!.value;
    this.column.setPattern(newValue);
    return true;
  }
}
