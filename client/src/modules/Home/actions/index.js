import { createActionType } from './actionCreator';
import { baseActionCreator } from '../../../store/common_redux_utils/baseActionCreator';

export const CHANGE_TITLE = createActionType('CHANGE_TITLE');

export const changeTitleAC = (value = null) => baseActionCreator(CHANGE_TITLE, value);
