import CanvasTextureRenderer from '../engine/CanvasTextureRenderer';
import DataProvider from '../../provider/ADataProvider';
import {AEventDispatcher} from '../../utils';


export default class TextureRenderer extends AEventDispatcher {

  private readonly renderer: CanvasTextureRenderer;

  constructor(parent: HTMLElement, public data: DataProvider) {
    super();

    this.renderer = new CanvasTextureRenderer(data, parent);
  }

  get ctx() {
    return this.renderer.ctx;
  }

  protected createEventList() {
    return super.createEventList(); /*.concat([TaggleRenderer.EVENT_HOVER_CHANGED])*/
  }

  destroy() {
    this.renderer.destroy();
  }

  update() {
    this.renderer.update();
  }

  changeDataStorage(data: DataProvider) {
    this.renderer.changeDataStorage(data);
    this.update();
  }

  show() {
    this.renderer.show();
  }

  hide() {
    this.renderer.hide();
  }
}
