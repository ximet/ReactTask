import { isReadyForDataFetchingSelector, isReadyForSearchSelector } from './';

const mockedCasesForDataFetching = [
  [
    {
      serverApi: {
        isFetchingInProgress: true,
        isTokenReceived: true
      }
    },
    false
  ],
  [
    {
      serverApi: {
        isFetchingInProgress: true,
        isTokenReceived: false
      }
    },
    false
  ],
  [
    {
      serverApi: {
        isFetchingInProgress: false,
        isTokenReceived: true
      }
    },
    true
  ],
  [
    {
      serverApi: {
        isFetchingInProgress: false,
        isTokenReceived: false
      }
    },
    false
  ]
];

const mockedCasesForSearch = [
  [
    {
      locationsSearch: {
        isSearchInProgress: true
      },
      serverApi: {
        isTokenReceived: true
      }
    },
    false
  ],
  [
    {
      locationsSearch: {
        isSearchInProgress: true
      },
      serverApi: {
        isTokenReceived: false
      }
    },
    false
  ],
  [
    {
      locationsSearch: {
        isSearchInProgress: false
      },
      serverApi: {
        isTokenReceived: true
      }
    },
    true
  ],
  [
    {
      locationsSearch: {
        isSearchInProgress: false
      },
      serverApi: {
        isTokenReceived: false
      }
    },
    false
  ]
];

describe('selectors', () => {
  test.each(mockedCasesForDataFetching)(
    'should return isReadyForDataFetching value',
    (state, expectedResult) => {
      const result = isReadyForDataFetchingSelector(state);
      expect(result).toEqual(expectedResult);
    }
  );
  test.each(mockedCasesForSearch)(
    'should return isReadyForSearch value',
    (state, expectedResult) => {
      const result = isReadyForSearchSelector(state);
      expect(result).toEqual(expectedResult);
    }
  );
});
