import { SET_FIELD, SET_IS_FORM_VALID, SUBMIT_FORM, RESET_FORM_STATE } from '../actions/feedback';

const initialFormData = {
  one: {
    question: 'How often do you visit weather forecast applications?',
    answer: '',
    name: 'one',
    placeholder: 'ex. 1-3 times a week',
    validators: {
      minLength: 3,
      required: true
    },
    touched: false,
    valid: false,
    error: null
  },
  two: {
    question: 'How often do you visit Weather Forecast?',
    answer: '',
    name: 'two',
    placeholder: 'ex. 1-3 times a week',
    validators: {
      minLength: 3,
      required: true
    },
    touched: false,
    valid: false,
    error: null
  },
  three: {
    question: 'Is there something you`d like us to change in Weather Forecast?',
    answer: '',
    name: 'three',
    placeholder: 'ex. I would like you to add monthly forecast!',
    validators: {
      minLength: 2,
      required: true
    },
    touched: false,
    valid: false,
    error: null
  },
  four: {
    question: 'Tell us anything else you want!',
    answer: '',
    name: 'four',
    placeholder: 'ex. I think you should add dark mode!',
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

const feedback = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD: {
      const newFormState = { ...state.formData, [action.payload.name]: action.payload.copyField };
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

export default feedback;
