import {ITaggleOptions} from './interfaces';
import {renderers} from './renderer';
import {toolbarActions} from './ui';

export * from './interfaces';


export function defaultOptions(): ITaggleOptions {
  return {
    toolbar: Object.assign({}, toolbarActions),
    renderers: Object.assign({}, renderers),

    labelRotation: 0,
    summaryHeader: true,
    animated: true,
    expandLineOnHover: false,
    sidePanel: true,
    sidePanelCollapsed: false,
    defaultSlopeGraphMode: 'item',
    overviewMode: false,

    rowHeight: 18,
    groupHeight: 40,
    groupPadding: 5,
    rowPadding: 2,

    levelOfDetail: () => 'high',
    customRowUpdate: () => undefined,
    dynamicHeight: () => null
  };
}
