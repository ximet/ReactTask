import {
  setSearchQuery,
  setSearchInProgress,
  setSearchResults,
  clearSearch
} from './LocationsSearchActions';

describe('locations search actions', () => {
  it('should return SET_SEARCH_QUERY action', () => {
    const mockedQuery = 'example query';
    const expectedResult = {
      type: 'SET_SEARCH_QUERY',
      payload: {
        searchQuery: mockedQuery
      }
    };
    expect(setSearchQuery(mockedQuery)).toEqual(expectedResult);
  });
  it('should return SET_SEARCH_IN_PROGRESS action', () => {
    const mockedValue = false;
    const expectedResult = {
      type: 'SET_SEARCH_IN_PROGRESS',
      payload: {
        isSearchInProgress: mockedValue
      }
    };
    expect(setSearchInProgress(mockedValue)).toEqual(expectedResult);
  });
  it('should return SET_SEARCH_RESULTS action', () => {
    const mockedSearchResults = [
      {
        id: 105128581,
        name: 'New York City',
        country: 'United States',
        timezone: 'America/New_York',
        state: 'NY',
        adminArea: 'New York',
        lon: -74.005973816,
        lat: 40.714267731
      },
      {
        id: 105128616,
        name: 'New York Mills',
        country: 'United States',
        timezone: 'America/New_York',
        state: 'NY',
        adminArea: 'New York',
        lon: -75.291275024,
        lat: 43.10534668
      },
      {
        id: 105039192,
        name: 'New York Mills',
        country: 'United States',
        timezone: 'America/North_Dakota/Center',
        state: 'MN',
        adminArea: 'Minnesota',
        lon: -95.376144409,
        lat: 46.518016815
      }
    ];
    const expectedResult = {
      type: 'SET_SEARCH_RESULTS',
      payload: {
        searchResults: mockedSearchResults
      }
    };
    expect(setSearchResults(mockedSearchResults)).toEqual(expectedResult);
  });
  it('should return CLEAR_SEARCH action', () => {
    const expectedResult = {
      type: 'CLEAR_SEARCH'
    };
    expect(clearSearch()).toEqual(expectedResult);
  });
});
