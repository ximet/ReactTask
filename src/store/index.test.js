import { searchReducer } from './';
import { SAVE_SEARCH, DELETE_SEARCH } from './actionTypes';

const initialState = { favoriteCities: [] };
const favoriteCityData = { id: 100598316 };
const savedFavoriteCities = { favoriteCities: [favoriteCityData] };

describe('search reducer for cities', () => {
  test('should return the initial state', () => {
    expect(searchReducer(initialState, {})).toEqual(initialState);
  });

  test('should return updated favorite cities list', () => {
    expect(
      searchReducer(initialState, {
        type: SAVE_SEARCH,
        value: favoriteCityData
      })
    ).toEqual(savedFavoriteCities);
  });

  test('should return deleted and empty favorite cities array', () => {
    expect(
      searchReducer(savedFavoriteCities, { type: DELETE_SEARCH, id: favoriteCityData.id })
    ).toEqual(initialState);
  });
});
