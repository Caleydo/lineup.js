import LinkColumn from '../model/LinkColumn';
import Column from '../model/Column';
import ADialog from './ADialog';

export default class EditLinkDialog extends ADialog {

  /**
   * opens a dialog for editing the link of a column
   * @param column the column to rename
   * @param $header the visual header element of this column
   * @param templates list of possible link templates
   * @param idPrefix dom id prefix
   * @param title optional title
   */
  constructor(private readonly column: LinkColumn, $header: d3.Selection<Column>, private readonly idPrefix: string, private readonly templates: string[] = [], title: string = 'Edit Link ($ as Placeholder)') {
    super($header, title);
  }

  openDialog() {
    let t = `<input
        type="text"
        size="15"
        value="${this.column.getLink()}"
        required="required"
        autofocus="autofocus"
        placeholder="link pattern"
        ${this.templates.length > 0 ? `list="ui${this.idPrefix}lineupPatternList"` : ''}
      ><br>`;
    if (this.templates.length > 0) {
      t += `<datalist id="ui${this.idPrefix}lineupPatternList">${this.templates.map((t) => `<option value="${t}">`)}</datalist>`;
    }

    const popup = this.makePopup(t);

    this.onButton(popup, {
      cancel: () => undefined,
      reset: () => undefined,
      submit: () => {
        const newValue = popup.select('input[type="text"]').property('value');
        this.column.setLink(newValue);
        return true;
      }
    });
  }
}
