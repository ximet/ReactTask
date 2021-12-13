import { CHANGE_NAME, CHANGE_EMAIL, CHANGE_PHONE, CHANGE_MESSAGE, SEND_MESSAGE } from '../actions';

const INITIAL_STATE = {
  name: {
    value: 'Your Name',
    error: ''
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
  }
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
    case SEND_MESSAGE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default feedbackReducer;
