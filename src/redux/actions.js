import { SEARCH_LOCATION } from './types';

export function searchLocation(text) {
  return {
    type: SEARCH_LOCATION,
    payload: text
  };
}
