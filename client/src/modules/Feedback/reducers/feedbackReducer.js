import {
  CHANGE_NAME,
  CHANGE_EMAIL,
  CHANGE_PHONE,
  CHANGE_MESSAGE,
  SEND_MESSAGE_FINISHED,
  SEND_MESSAGE_START,
  SET_VALIDATION_RESULT
} from '../actions';

const INITIAL_STATE = {
  name: {
    value: '',
    error: '',
    defaultValue: 'Your Name'
  },
  email: {
    value: '',
    error: '',
    defaultValue: 'Email address'
  },
  phone: {
    value: '',
    error: '',
    defaultValue: 'Phone'
  },
  message: {
    value: '',
    error: '',
    defaultValue: 'Your message'
  },
  isSending: false
};

const feedbackReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: { ...state.name, value: action.payload } };
    case CHANGE_EMAIL:
      return { ...state, email: { ...state.email, value: action.payload } };
    case CHANGE_PHONE:
      return { ...state, phone: { ...state.phone, value: action.payload } };
    case CHANGE_MESSAGE:
      return { ...state, message: { ...state.message, value: action.payload } };
    case SEND_MESSAGE_START:
      return { ...state, isSending: action.payload };
    case SET_VALIDATION_RESULT:
      const newState = { ...state };
      action.payload.forEach(({ name, error }) => {
        newState[name] = { ...newState[name], error };
      });
      return newState;
    case SEND_MESSAGE_FINISHED:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

export default feedbackReducer;
