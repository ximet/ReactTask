import { createSelector } from 'reselect';

export const isFetchingInProgressSelector = state => state.serverApi.isFetchingInProgress;
export const isTokenReceivedSelector = state => state.serverApi.isTokenReceived;

export const isReadyForDataFetchingSelector = createSelector(
  [isFetchingInProgressSelector, isTokenReceivedSelector],
  (isFetchingInProgress, isTokenReceived) => isTokenReceived && !isFetchingInProgress
);
