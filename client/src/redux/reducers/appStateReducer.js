import { SET_IS_DATA_RECEIVED } from '../actions/appStateActions';

const initialState = {
  isDataReceived: false
};

export const appState = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_DATA_RECEIVED: {
      return { ...state, isDataReceived: action.payload.status };
    }

    default: {
      return state;
    }
  }
};
