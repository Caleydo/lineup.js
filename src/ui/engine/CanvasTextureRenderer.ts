import EngineRanking from './EngineRanking';
import {IDataRow} from '../../provider/ADataProvider';
import NumbersColumn from '../../model/NumbersColumn';

export interface ITextureRenderer{
  update(rankings: EngineRanking[], localData: IDataRow[][]): void;
  destroy(): void;
  show(): void;
  hide(): void;
}

export default class CanvasTextureRenderer implements ITextureRenderer {

  readonly node: HTMLElement;
  readonly canvas: any;

  constructor(parent: Element) {
    this.node = parent.ownerDocument.createElement('main');
    this.node.id = 'lu-texture-container';
    parent.appendChild(this.node);
    this.canvas = parent.ownerDocument.createElement('canvas');
  }

  update(rankings: EngineRanking[], localData: IDataRow[][]) {
    this.node.innerHTML = ''; //remove all children

    rankings.forEach((r, i) => {
      const grouped = r.groupData(localData[i]);

      r.ranking.flatColumns.forEach((column) => {
        let newElement = null;
        if (column instanceof NumbersColumn) {
            const col = <NumbersColumn>column;
            newElement = this.generateImage(grouped.map((value) => {
              return (<any>value).v[(<any>col.desc).column];
            }), col.getRawColorScale())
        } else {
          newElement = this.node.ownerDocument.createElement('img');
        }
        newElement.style.width = column.getWidth() + 'px';
        this.node.appendChild(newElement);
      });
    });
  }

  private generateImage(data: any[][], colorScale: any){
    let height = data.length;
    let width = 0;
    if(height > 0){
      width = data[0].length;
    }

    this.canvas.setAttribute('height', '' + height);
    this.canvas.setAttribute('width', '' + width);

    const ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');

    data.forEach((row, y) => {
      row.forEach((value, x) => {
        ctx.fillStyle = colorScale(value);
        ctx.fillRect(x, y, 1, 1);
      });
    });

    ctx.save();

    const image = this.node.ownerDocument.createElement('img');
    image.src = this.canvas.toDataURL();

    return image;
  }


  destroy() {
    this.node.remove();
  }

  show() {
    this.node.classList.remove('hidden');
  }

  hide() {
    this.node.classList.add('hidden');
  }
}

