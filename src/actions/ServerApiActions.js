import {
  SET_IS_FETCHING_ERROR,
  SET_IS_FETCHING_IN_PROGRESS,
  SET_IS_TOKEN_RECEIVED,
  SET_TOKEN_EXPIRATION_TIME
} from '../actionTypes';

export const setIsTokenReceived = isTokenReceived => ({
  type: SET_IS_TOKEN_RECEIVED,
  payload: { isTokenReceived }
});

export const setTokenExpirationTime = tokenExpirationTime => ({
  type: SET_TOKEN_EXPIRATION_TIME,
  payload: { tokenExpirationTime }
});

export const setIsFetchingInProgress = isFetchingInProgress => ({
  type: SET_IS_FETCHING_IN_PROGRESS,
  payload: { isFetchingInProgress }
});

export const setIsFetchingError = isFetchingError => ({
  type: SET_IS_FETCHING_ERROR,
  payload: { isFetchingError }
});
