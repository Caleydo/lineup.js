import ICellRendererFactory from './ICellRendererFactory';
import {INumbersColumn} from '../model/NumbersColumn';
import {IDOMRenderContext, ICanvasRenderContext} from './RendererContexts';
import {ISVGCellRenderer} from './IDOMCellRenderers';
import {IDataRow} from '../provider/ADataProvider';
import ICanvasCellRenderer from './ICanvasCellRenderer';
import {line as d3line, curveLinear} from 'd3-shape';
import {scaleLinear} from 'd3-scale';
import Column from '../model/Column';

function createScales(col: INumbersColumn & Column) {
  const xScale = scaleLinear().domain([0, col.getDataLength()-1]).range([0, col.getWidth()]);
  const yScale = scaleLinear().domain([0, 1]);
  return {xScale, yScale};
}

export default class SparklineCellRenderer implements ICellRendererFactory {

  createSVG(col: INumbersColumn & Column, context: IDOMRenderContext): ISVGCellRenderer {
    const {xScale, yScale} = createScales(col);
    const line = d3line<number>()
      .x((d, j) => xScale(j))
      .y(yScale)
      .curve(curveLinear);

    return {
      template: `<path class='sparklinecell'></path>`,
      update: (n: SVGGElement, d: IDataRow, i: number) => {
        yScale.range([context.rowHeight(i), 0]);
        n.setAttribute('d', line(col.getNumbers(d.v, d.dataIndex)));
      }
    };
  }

  createCanvas(col: INumbersColumn & Column, context: ICanvasRenderContext): ICanvasCellRenderer {
    const {xScale, yScale} = createScales(col);

    return (ctx: CanvasRenderingContext2D, d: IDataRow, i: number) => {
      const data = col.getNumbers(d.v, d.dataIndex);
      if (data.length === 0) {
        return;
      }
      yScale.range([context.rowHeight(i), 0]);

      ctx.strokeStyle = 'black';
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(xScale(0), yScale(data[0]));
      for (let i = 1; i < data.length; ++i) {
        ctx.lineTo(xScale(i), yScale(data[i]));
      }
      ctx.stroke();
    };
  }
}
