export const SET_IS_DATA_RECEIVED = 'SET_IS_DATA_RECEIVED';

export const setIsDataReceived = status => ({
  type: SET_IS_DATA_RECEIVED,
  payload: {
    status
  }
});
