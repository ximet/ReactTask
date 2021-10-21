import { createSelector } from 'reselect';

export const isFetchingInProgressSelector = state => state.serverApi.isFetchingInProgress;
export const isTokenReceivedSelector = state => state.serverApi.isTokenReceived;
export const isSearchInProgressSelector = state => state.locationsSearch.isSearchInProgress;

export const isReadyForDataFetchingSelector = createSelector(
  [isFetchingInProgressSelector, isTokenReceivedSelector],
  (isFetchingInProgress, isTokenReceived) => isTokenReceived && !isFetchingInProgress
);

export const isReadyForSearchSelector = createSelector(
  [isSearchInProgressSelector, isTokenReceivedSelector],
  (isSearchInProgress, isTokenReceived) => isTokenReceived && !isSearchInProgress
);
