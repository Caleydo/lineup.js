import {Column, IGroupData, IGroupItem} from '../model';
import {IDataProvider} from '../provider';
import {IImposer, IRenderContext} from '../renderer';
import {ISummaryRenderer} from '../renderer/interfaces';
import {IToolbarAction, IToolbarDialogAddon} from './toolbar';
import DialogManager from './dialogs/DialogManager';
import {ILineUpFlags} from '../interfaces';

export interface IRenderInfo {
  type: string;
  label: string;
}

export interface IRankingHeaderContextContainer {
  readonly idPrefix: string;
  readonly document: Document;
  readonly provider: IDataProvider;

  readonly dialogManager: DialogManager;

  asElement(html: string): HTMLElement;

  readonly toolbar: {[key: string]: IToolbarAction | IToolbarDialogAddon};

  readonly flags: ILineUpFlags;

  getPossibleRenderer(col: Column): {item: IRenderInfo[], group: IRenderInfo[], summary: IRenderInfo[]};

  summaryRenderer(co: Column, interactive: boolean, imposer?: IImposer): ISummaryRenderer;
}

export interface IRankingBodyContext extends IRankingHeaderContextContainer, IRenderContext {
  isGroup(index: number): boolean;

  getGroup(index: number): IGroupData;

  getRow(index: number): IGroupItem;
}

export declare type IRankingHeaderContext = Readonly<IRankingHeaderContextContainer>;

export declare type IRankingContext = Readonly<IRankingBodyContext>;

