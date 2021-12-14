import {
  CHANGE_NAME,
  CHANGE_EMAIL,
  CHANGE_PHONE,
  CHANGE_MESSAGE,
  SEND_MESSAGE_FINISHED,
  SEND_MESSAGE_START
} from '../actions';

const INITIAL_STATE = {
  name: {
    value: 'Your Name',
    error: 'err'
  },
  email: {
    value: 'Email address',
    error: ''
  },
  phone: {
    value: 'Phone',
    error: ''
  },
  message: {
    value: 'Your message',
    error: ''
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
    case SEND_MESSAGE_FINISHED:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default feedbackReducer;
