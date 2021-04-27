import { FEEDBACK } from '../../common/constants';
import { getFormFieldLengthErrorMessage } from '../../common/helpers';

const PREFIX = 'FEEDBACK/';

export const SET_FIELD = `${PREFIX}SET_FIELD`;
export const SET_IS_FORM_VALID = `${PREFIX}SET_IS_FORM_VALID`;
export const SET_IS_FORM_SUBMITTED = `${PREFIX}SET_IS_FORM_SUBMITTED`;
export const RESET_FORM_STATE = `${PREFIX}RESET_FORM_STATE`;
export const SUBMIT_FORM = `${PREFIX}SUBMIT_FORM`;

const setField = (name, currentField) => ({ type: SET_FIELD, payload: { name, currentField } });
const setIsFormValid = isValid => ({ type: SET_IS_FORM_VALID, payload: isValid });
const submitFormAction = { type: SUBMIT_FORM };
const resetFormState = { type: RESET_FORM_STATE };

export const setForm = event => (dispatch, getState) => {
  const { name, value } = event.target;
  const {
    feedback: { formData }
  } = getState();

  // get the current field
  const currentField = { ...formData[name] };
  currentField.answer = value;
  currentField.touched = true;

  if (currentField.answer.length >= currentField.validators.minLength) {
    currentField.valid = true;
    currentField.error = null;
  } else {
    currentField.valid = false;
    currentField.error = getFormFieldLengthErrorMessage(currentField.validators.minLength);
  }

  dispatch(setField(name, currentField));

  const isValid = Object.values(formData).every(field => field.valid);
  dispatch(setIsFormValid(isValid));
};

export const submitForm = event => (dispatch, getState) => {
  event.preventDefault();
  const {
    feedback: { formData }
  } = getState();

  // gather up the form state
  const formState = Object.values(formData).reduce(
    (acc, value) => [...acc, { question: value.question, answer: value.answer }],
    []
  );

  const storedFeedback = JSON.parse(localStorage.getItem(FEEDBACK)) || [];
  const addedFeedback = [...storedFeedback, formState];
  localStorage.setItem(FEEDBACK, JSON.stringify(addedFeedback));

  dispatch(submitFormAction);
  dispatch(resetFormState);
};
