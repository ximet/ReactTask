import {
  SET_FETCHING_ERROR,
  SET_IS_FETCHING_IN_PROGRESS,
  SET_IS_TOKEN_RECEIVED,
  SET_TOKEN_EXPIRATION_TIME
} from '../actionTypes';

const initialState = {
  isTokenReceived: false,
  tokenExpirationTime: 0,
  isFetchingInProgress: false,
  fetchingError: null
};

const serverApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_TOKEN_RECEIVED:
      return {
        ...state,
        isTokenReceived: action.payload.isTokenReceived
      };
    case SET_TOKEN_EXPIRATION_TIME:
      return {
        ...state,
        tokenExpirationTime: action.payload.tokenExpirationTime
      };
    case SET_IS_FETCHING_IN_PROGRESS:
      return {
        ...state,
        isFetchingInProgress: action.payload.isFetchingInProgress
      };
    case SET_FETCHING_ERROR:
      return {
        ...state,
        fetchingError: action.payload.fetchingError
      };

    default:
      return state;
  }
};

export default serverApiReducer;
