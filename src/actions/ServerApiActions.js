import {
  SET_FETCHING_ERROR,
  SET_IS_FETCHING_IN_PROGRESS,
  SET_IS_TOKEN_RECEIVED,
  SET_TOKEN_EXPIRATION_TIME
} from '../actionTypes';
import { API_AUTH_PASS, API_AUTH_USERNAME } from '../constants/constants';
import { weatherAPI } from '../services/dataService';

export const setIsTokenReceived = isTokenReceived => ({
  type: SET_IS_TOKEN_RECEIVED,
  payload: {
    isTokenReceived
  }
});

export const setTokenExpirationTime = tokenExpirationTime => ({
  type: SET_TOKEN_EXPIRATION_TIME,
  payload: {
    tokenExpirationTime
  }
});

export const setIsFetchingInProgress = isFetchingInProgress => ({
  type: SET_IS_FETCHING_IN_PROGRESS,
  payload: {
    isFetchingInProgress
  }
});

export const setFetchingError = fetchingError => ({
  type: SET_FETCHING_ERROR,
  payload: {
    fetchingError
  }
});

export const getToken = () => dispatch => {
  dispatch(setIsFetchingInProgress(true));
  weatherAPI
    .getToken(API_AUTH_USERNAME, API_AUTH_PASS)
    .then(({ data }) => {
      dispatch(setIsTokenReceived(true));
      const expixationTime = Number(
        new Date().setSeconds(new Date().getSeconds() + data.expires_in)
      );
      dispatch(setTokenExpirationTime(expixationTime));
    })
    .catch(err => dispatch(setFetchingError(err)))
    .finally(() => {
      dispatch(setIsFetchingInProgress(false));
    });
};
