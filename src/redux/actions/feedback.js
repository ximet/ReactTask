const PREFIX = 'FEEDBACK/';

export const SET_FIELD = `${PREFIX}SET_FIELD`;
export const SET_IS_FORM_VALID = `${PREFIX}SET_IS_FORM_VALID`;
export const SET_IS_FORM_SUBMITTED = `${PREFIX}SET_IS_FORM_SUBMITTED`;
export const RESET_FORM_STATE = `${PREFIX}RESET_FORM_STATE`;
export const SUBMIT_FORM = `${PREFIX}SUBMIT_FORM`;

const setField = (name, copyField) => ({ type: SET_FIELD, payload: { name, copyField } });
const setIsFormValid = isValid => ({ type: SET_IS_FORM_VALID, payload: isValid });
const submitFormAction = { type: SUBMIT_FORM };
const resetFormState = { type: RESET_FORM_STATE };

export const setForm = event => (dispatch, getState) => {
  const { name, value } = event.target;
  const {
    feedback: { formData }
  } = getState();

  // get the current field
  const copyField = { ...formData[name] };
  copyField.answer = value;
  copyField.touched = true;

  if (copyField.answer.length >= copyField.validators.minLength) {
    copyField.valid = true;
    copyField.error = null;
  } else {
    copyField.valid = false;
    copyField.error = `You'll need to add at least ${copyField.validators.minLength} symbols here`;
  }

  dispatch(setField(name, copyField));

  const isValid = Object.values(formData).every(field => field.valid);
  dispatch(setIsFormValid(isValid));
};

export const submitForm = event => (dispatch, getState) => {
  event.preventDefault();
  const {
    feedback: { formData }
  } = getState();

  const formState = Object.values(formData).reduce(
    (acc, value) => [...acc, { question: value.question, answer: value.answer }],
    []
  );
  const storedFeedback = JSON.parse(localStorage.getItem('feedback')) || [];
  const addedFeedback = [...storedFeedback, formState];
  localStorage.setItem('feedback', JSON.stringify(addedFeedback));

  dispatch(submitFormAction);
  dispatch(resetFormState);
};
