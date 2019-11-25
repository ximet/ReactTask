import { ACTION_TYPES } from '../constants';

export const toggleButtonAction = (isMore) => ({
  type: ACTION_TYPES.TOGGLE_BUTTON,
  isMore,
});
