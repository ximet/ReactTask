import { createActionType } from './actionCreator';
import { baseActionCreator } from '../../../store/common_redux_utils/baseActionCreator';
import { addFeedback } from '../../../feedbackManager';
import { getFormData } from '../selectors';

import Joi from 'joi';
const validation_schema_rules = {
  name: Joi.object({
    name: Joi.string().min(2).max(20).required()
  }),
  phone: Joi.object({
    phone: Joi.string().min(8).max(20).required()
  }),
  email: Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
  })
};

export const CHANGE_NAME = createActionType('CHANGE_NAME');
export const CHANGE_EMAIL = createActionType('CHANGE_EMAIL');
export const CHANGE_PHONE = createActionType('CHANGE_PHONE');
export const CHANGE_MESSAGE = createActionType('CHANGE_MESSAGE');
export const SEND_MESSAGE_START = createActionType('SEND_MESSAGE_START');
export const SEND_MESSAGE_FINISHED = createActionType('SEND_MESSAGE_FINISHED');
export const SET_VALIDATION_RESULT = createActionType('SET_VALIDATION_RESULT');

export const changeName = (value = null) => baseActionCreator(CHANGE_NAME, value);
export const changeEmail = (value = null) => baseActionCreator(CHANGE_EMAIL, value);
export const changePhone = (value = null) => baseActionCreator(CHANGE_PHONE, value);
export const changeFeedbackMessage = (value = null) => baseActionCreator(CHANGE_MESSAGE, value);
const sendMessageStart = (value = null) => baseActionCreator(SEND_MESSAGE_START, value);
const sendMessageFinished = (value = null) => baseActionCreator(SEND_MESSAGE_FINISHED, value);
const setValidationResult = (value = null) => baseActionCreator(SET_VALIDATION_RESULT, value);

export const sendMessage = () => (dispatch, getState) => {
  dispatch(sendMessageStart(true));
  addFeedback(getFormData(getState()));
  dispatch(sendMessageFinished());
};

export const validateField =  field => (dispatch) => {

    const validationDetails =  validation_schema_rules[field.name].validate({ [field.name]: field.value });
    const error = validationDetails.error ? validationDetails.error.message : '';

  dispatch(
    setValidationResult({
      name: field.name,
      value: field.value,
      error
    })
  );
};
