export enum ActionType {
  SET_THEME = 'SET_THEME',
  SET_SIDEBAR_OPEN = 'SET_SIDEBAR_OPEN'
}

export interface ThemeAction {
  type: ActionType.SET_THEME;
  payload: string;
}

export interface SidebarAction {
  type: ActionType.SET_SIDEBAR_OPEN;
  payload: boolean;
}

export type Action = ThemeAction | SidebarAction;
