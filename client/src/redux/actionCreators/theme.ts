import { Dispatch } from 'redux';

import type { Theme } from 'types';
import { ActionType, Action } from '../actionTypes/theme';

export const toggleTheme = (theme: Theme) => (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.TOGGLE_THEME, payload: theme });
};
