export enum ActionType {
  TOGGLE_THEME = 'TOGGLE_THEME'
}

export interface Action {
  type: ActionType.TOGGLE_THEME;
  payload: string;
}
