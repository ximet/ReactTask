import { SET_FIELD, SET_IS_FORM_VALID, SUBMIT_FORM, RESET_FORM_STATE } from '../actions/feedback';

const initialFormData = {
  firstQuestion: {
    question: 'How often do you visit weather applications?',
    value: '',
    name: 'firstQuestion',
    placeholder: 'ex. 1-3 times a week',
    type: 'text',
    validators: {
      minLength: 3,
      required: true
    },
    touched: false,
    valid: false,
    error: null
  },
  secondQuestion: {
    question: 'How often do you visit Weather Forecast?',
    value: '',
    name: 'secondQuestion',
    placeholder: 'ex. 1-3 times a week',
    type: 'text',
    validators: {
      minLength: 3,
      required: true
    },
    touched: false,
    valid: false,
    error: null
  },
  thirdQuestion: {
    question: 'Is there something you`d like us to change in Weather Forecast?',
    value: '',
    name: 'thirdQuestion',
    placeholder: 'ex. I would like you to add monthly forecast!',
    type: 'text',
    validators: {
      minLength: 3,
      required: true
    },
    touched: false,
    valid: false,
    error: null
  },
  fourthQuestion: {
    question: 'Tell us anything else you want!',
    value: '',
    name: 'fourthQuestion',
    placeholder: 'ex. I think you should add another theme!',
    type: 'text',
    validators: {
      minLength: 3,
      required: true
    },
    touched: false,
    valid: false,
    error: null
  }
};

const initialState = {
  isFormValid: false,
  isFormSubmitted: false,
  formData: initialFormData
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD: {
      const newFormState = {
        ...state.formData,
        [action.payload.name]: action.payload.currentField
      };
      return { ...state, formData: newFormState };
    }
    case SET_IS_FORM_VALID: {
      return { ...state, isFormValid: action.payload };
    }
    case SUBMIT_FORM: {
      return { ...state, isFormSubmitted: true };
    }
    case RESET_FORM_STATE: {
      return { ...state, formData: initialFormData };
    }
    default: {
      return state;
    }
  }
};

export default feedbackReducer;
