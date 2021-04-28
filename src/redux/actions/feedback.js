import { FEEDBACK } from '../../common/constants';
import { getFormFieldLengthErrorMessage } from '../../common/helpers';
import { getFormState } from '../selectors/feedbackSelectors';

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

export const updateFormState = (name, value) => (dispatch, getState) => {
  const formData = getFormState(getState());

  // get the current field
  const currentField = { ...formData[name] };
  currentField.value = value;
  currentField.touched = true;

  if (currentField.value.length >= currentField.validators.minLength) {
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
  const formData = getFormState(getState());

  // gather up the form state
  const formState = Object.values(formData).reduce(
    (acc, field) => acc.concat({ question: field.question, answer: field.value }),
    []
  );

  const storedFeedback = JSON.parse(localStorage.getItem(FEEDBACK)) || [];
  const addedFeedback = [...storedFeedback, formState];
  localStorage.setItem(FEEDBACK, JSON.stringify(addedFeedback));

  dispatch(submitFormAction);
  dispatch(resetFormState);
};
