import EngineRanking from './EngineRanking';
import {IDataRow} from '../model';
import {scaleLinear, scaleOrdinal} from 'd3-scale';
import Column from '../model/Column';
import NumberColumn from '../model/NumberColumn';
import NumbersColumn from '../model/NumbersColumn';
import CategoricalColumn from '../model/CategoricalColumn';
import CategoricalsColumn from '../model/CategoricalsColumn';
import CompositeColumn from '../model/CompositeColumn';
import * as d3 from 'd3-selection';

export interface ITextureRenderer {
  update(rankings: EngineRanking[], localData: IDataRow[][]): void;
  destroy(): void;
  show(): void;
  hide(): void;
}

export default class CanvasTextureRenderer implements ITextureRenderer {

  readonly node: HTMLElement;
  readonly canvas: any;
  readonly headerNode: HTMLElement;
  private renderedColumns: any[];

  constructor(parent: Element) {
    this.node = parent.ownerDocument.createElement('main');
    this.node.id = 'lu-texture-container';
    parent.appendChild(this.node);
    this.canvas = parent.ownerDocument.createElement('canvas');
    this.headerNode = <HTMLElement>d3.select(parent).select('header').node();
    this.renderedColumns = [];

    this.node.addEventListener('scroll', () => {
      {
        //scroll header with main panel
        this.headerNode.scrollLeft = this.node.scrollLeft;
      }
    });
  }

  update(rankings: EngineRanking[], localData: IDataRow[][]) {
    this.node.innerHTML = ''; //remove all children
    this.renderedColumns = [];

    rankings.forEach((r, i) => {
      const grouped = r.groupData(localData[i]);

      r.ranking.flatColumns.forEach((column) => this.createColumn(column, grouped, false));
    });
  }

  private createColumn(column: Column, grouped: any[], partOfComposite: boolean) {
    if (this.renderedColumns.includes(column.id)) {
      if (partOfComposite) {
        const $node = d3.select(this.node);
        const $img = $node.select(`img[data-columnid="${column.id}"]`).node();
        if ($img !== null) {
          $node.append(() => $img); //reorder the column
          return;
        }
      } else {
        return; //column already rendered
      }
    }
    let newElement = null;
    if (column instanceof NumbersColumn) {
      const col = <NumbersColumn>column;
      newElement = this.generateImage(grouped.map((value) => {
        return (<any>value).v[(<any>col.desc).column];
      }), CanvasTextureRenderer.getColorScale(col));
    } else if (column instanceof NumberColumn) {
      const col = <NumberColumn>column;
      newElement = this.generateImage(grouped.map((value) => {
        return [(<any>value).v[(<any>col.desc).column]];
      }), CanvasTextureRenderer.getColorScale(col));
    } else if (column instanceof CategoricalsColumn) {
      const col = <CategoricalsColumn>column;
      newElement = this.generateImage(grouped.map((value) => {
        return (<any>value).v[(<any>col.desc).column];
      }), CanvasTextureRenderer.getColorScale(col));
    } else if (column instanceof CategoricalColumn) {
      const col = <CategoricalColumn>column;
      newElement = this.generateImage(grouped.map((value) => {
        return [(<any>value).v[(<any>col.desc).column]];
      }), CanvasTextureRenderer.getColorScale(col));
    } else if ('children' in column) {
      //handle composite columns
      (<CompositeColumn>column).children.forEach((c) => this.createColumn(c, grouped, true));
      return;
    } else {
      newElement = this.node.ownerDocument.createElement('img');
    }

    newElement.style.width = `${column.getWidth()}px`;
    newElement.setAttribute('data-columnid', column.id);
    if (partOfComposite) {
      newElement.classList.add('partOfComposite');
    }
    this.node.appendChild(newElement);
    this.renderedColumns.push(column.id);
  }

  private static getColorScale(column: Column) {
    let domain = [0, 0];

    if (column instanceof NumberColumn || column instanceof  NumbersColumn) {
      const colorScale = scaleLinear<string, string>();
      domain = column.getMapping().domain;
      if (domain[0] < 0 && domain[1] > 0) { // diverging
        colorScale
          .domain([domain[0], 0, domain[1]]);
      } else {
        colorScale
          .domain([domain[0], domain[1]]);
      }
      colorScale.range(['white', column.color ? column.color : 'black']);
      return colorScale;
    }
    if (column instanceof CategoricalColumn) {
      const colorScale = scaleOrdinal<number, string>();
      const categories = column.categories;
      colorScale
        .domain(categories.map((v) => v.value))
        .range(categories.map((v) => v.color));
      return colorScale;
    }
    return null;
  }

  private generateImage(data: any[][], colorScale: any) {
    const height = data.length;
    let width = 0;
    if(height > 0) {
      width = data[0].length;
    }

    this.canvas.setAttribute('height', `${height}`);
    this.canvas.setAttribute('width', `${width}`);

    if (colorScale !== null) {
      const ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');
      data.forEach((row, y) => {
        row.forEach((value, x) => {
          ctx.fillStyle = colorScale(value);
          ctx.fillRect(x, y, 1, 1);
        });
      });
      ctx.save();
    }

    const image = this.node.ownerDocument.createElement('img');
    image.src = this.canvas.toDataURL();

    return image;
  }

  destroy() {
    this.node.remove();
  }

  show() {
    this.node.style.display = null;
  }

  hide() {
    this.node.style.display = 'none';
  }
}

