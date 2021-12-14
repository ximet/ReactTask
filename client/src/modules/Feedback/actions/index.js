import { createActionType } from './actionCreator';
import { baseActionCreator } from '../../../store/common_redux_utils/baseActionCreator';
import { addFeedback } from '../../../feedbackManager';
import { getFormData } from '../selectors';

export const CHANGE_NAME = createActionType('CHANGE_NAME');
export const CHANGE_EMAIL = createActionType('CHANGE_EMAIL');
export const CHANGE_PHONE = createActionType('CHANGE_PHONE');
export const CHANGE_MESSAGE = createActionType('CHANGE_MESSAGE');
export const SEND_MESSAGE_START = createActionType('SEND_MESSAGE_START');
export const SEND_MESSAGE_FINISHED = createActionType('SEND_MESSAGE_FINISHED');

export const changeName = (value = null) => baseActionCreator(CHANGE_NAME, value);
export const changeEmail = (value = null) => baseActionCreator(CHANGE_EMAIL, value);
export const changePhone = (value = null) => baseActionCreator(CHANGE_PHONE, value);
export const changeMessage = (value = null) => baseActionCreator(CHANGE_MESSAGE, value);
const sendMessageStart = (value = null) => baseActionCreator(SEND_MESSAGE_START, value);
const sendMessageFinished = (value = null) => baseActionCreator(SEND_MESSAGE_FINISHED, value);
export const sendMessage = (dispatch, getState) => {
  dispatch(sendMessageStart(true));
  addFeedback(getFormData(getState()));
  dispatch(sendMessageFinished());
};
