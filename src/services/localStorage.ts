import { FeedbackState, FeedbackInDB } from 'types/feedbackType';
import { LocationInfoType } from 'types/cityInfoType';

export const FAVORITE_CITIES_LS_LABEL = 'favorite-cities';
export const FEEDBACK_DATA_LS_LABEL = 'feedback-data';

export function setInLocalStorage(data: string | {}[] | {}, key: string): void {
  const json = JSON.stringify(data);
  localStorage.setItem(key, json);
}

export function getFromLocalStorage(key: string): string {
  const json = localStorage.getItem(key);
  let data = '';

  if (json) {
    data = JSON.parse(json);
  }
  return data;
}

export const getFavoriteCities = (): LocationInfoType[] => {
  const favoriteCities: LocationInfoType[] = (getFromLocalStorage(FAVORITE_CITIES_LS_LABEL) ||
    []) as LocationInfoType[];
  return favoriteCities || [];
};

export const getFeedbacks = (): FeedbackState[] =>
  (getFromLocalStorage(FEEDBACK_DATA_LS_LABEL) || []) as FeedbackState[];

export const sendFeedback = (feedback: FeedbackState) => {
  const prevFeedbacks = getFeedbacks();
  const newFeedbacks = [...prevFeedbacks, feedback];
  setInLocalStorage(newFeedbacks, FEEDBACK_DATA_LS_LABEL);
};
