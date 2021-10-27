import reducer from './locationsSearchReducer';

describe('locations search reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      searchQuery: '',
      searchResults: [],
      isSearchInProgress: false
    };

    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should handle SET_SEARCH_QUERY', () => {
    const initialState = {
      searchQuery: '',
      searchResults: [],
      isSearchInProgress: false
    };

    const queryExample = 'query example';
    const setSearchQueryStateAction = {
      type: 'SET_SEARCH_QUERY',
      payload: { searchQuery: queryExample }
    };
    const expectedSetSearchQueryState = {
      searchQuery: queryExample,
      searchResults: [],
      isSearchInProgress: false
    };

    expect(reducer(initialState, setSearchQueryStateAction)).toEqual(expectedSetSearchQueryState);
  });

  it('should handle SET_SEARCH_IN_PROGRESS', () => {
    const initialState = {
      searchQuery: '',
      searchResults: [],
      isSearchInProgress: false
    };

    const setSearchInProgressAction = {
      type: 'SET_SEARCH_IN_PROGRESS',
      payload: { isSearchInProgress: true }
    };
    const expectedSetSearchInProgressState = {
      searchQuery: '',
      searchResults: [],
      isSearchInProgress: true
    };

    expect(reducer(initialState, setSearchInProgressAction)).toEqual(
      expectedSetSearchInProgressState
    );
  });

  it('should handle SET_SEARCH_RESULTS', () => {
    const initialState = {
      searchQuery: '',
      searchResults: [],
      isSearchInProgress: false
    };

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
    const setSearchResultsAction = {
      type: 'SET_SEARCH_RESULTS',
      payload: { searchResults: mockedSearchResults }
    };
    const expectedSetSearchResultsState = {
      searchQuery: '',
      searchResults: mockedSearchResults,
      isSearchInProgress: false
    };

    expect(reducer(initialState, setSearchResultsAction)).toEqual(expectedSetSearchResultsState);
  });

  it('should handle CLEAR_SEARCH', () => {
    const initialState = {
      searchQuery: '',
      searchResults: [],
      isSearchInProgress: false
    };
    const clearSearchAction = { type: 'CLEAR_SEARCH' };

    expect(reducer({}, clearSearchAction)).toEqual(initialState);
  });
});
