import { Dispatch } from 'redux';

import { ActionType, Action } from '../actionTypes/theme';
import type { Theme } from '../../types';

export const toggleTheme = (theme: Theme) => (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.TOGGLE_THEME, payload: theme });
};
