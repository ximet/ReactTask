import { ACTION_TYPES } from '../constants';

export const toggleButton = (isMore) => ({
  type: ACTION_TYPES.TOGGLE_BUTTON,
  payload: { isMore },
});
