import { Dispatch } from 'redux';

import type { Theme } from 'types';
import { ActionType, Action } from '../actionTypes/global';

export const setTheme = (theme: Theme) => (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.SET_THEME, payload: theme });
};

export const setSidebarOpen = (state: boolean) => (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.SET_SIDEBAR_OPEN, payload: state });
};
