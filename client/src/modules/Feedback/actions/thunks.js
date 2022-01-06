import { addFeedback } from '../../../feedbackManager';
import { getFormData } from '../selectors';
import { rules } from '../validation/rules';
import { sendMessageFinished, sendMessageStart, setValidationResult } from './index';

const combineErrors = errors => errors.map(err => ({ name: err.context.key, error: err.message }));

export const validateField = field => dispatch => {
  const validationDetails = rules[field.name].validate({
    [field.name]: field.value
  });
  const validationResult = validationDetails.error
    ? combineErrors(validationDetails.error.details)
    : [{ name: field.name, error: '' }];

  dispatch(setValidationResult(validationResult));
};

export const sendMessage = name => (dispatch, getState) => {
  let validationDetails;

  const data = getFormData(getState());
  validationDetails = rules[name].validate(data);

  if (!validationDetails.error) {
    dispatch(sendMessageStart(true));
    addFeedback(getFormData(getState()));
    dispatch(sendMessageFinished());
  } else {
    dispatch(setValidationResult(combineErrors(validationDetails.error.details)));
  }
};
