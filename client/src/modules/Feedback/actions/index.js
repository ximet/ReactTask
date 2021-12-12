import { createActionType } from './actionCreator';
import { baseActionCreator } from '../../../store/common_redux_utils/baseActionCreator';

export const CHANGE_NAME = createActionType('CHANGE_NAME');
export const CHANGE_EMAIL = createActionType('CHANGE_EMAIL');
export const CHANGE_PHONE = createActionType('CHANGE_PHONE');
export const CHANGE_MESSAGE = createActionType('CHANGE_MESSAGE');
export const SEND_MESSAGE = createActionType('SEND_MESSAGE');


export const changeNameAC = (value = null) => baseActionCreator(CHANGE_NAME, value);
export const changeEmailAC = (value = null) => baseActionCreator(CHANGE_EMAIL, value);
export const changePhoneAC = (value = null) => baseActionCreator(CHANGE_PHONE, value);
export const changeMessageAC = (value = null) => baseActionCreator(CHANGE_MESSAGE, value);
export const sendMessageAC = (value = null) => baseActionCreator(SEND_MESSAGE, value);


