import locationReducer from './locationReducer';

describe('Location Reducer', () => {
  it('Reducer should return initial state', () => {
    const initialState = { currentCity: {}, recentCities: [] };
    const action = { type: 'UNDEFINED' };

    expect(locationReducer(initialState, action)).toEqual(initialState);
  });

  it('Reducer should return state with current city data', () => {
    const initialState = { currentCity: {} };
    const action = {
      type: 'SET_CURRENT_CITY',
      payload: {
        adminArea: 'Minsk',
        country: 'Belarus',
        id: 100625144,
        lat: 53.900001526,
        lon: 27.566667557,
        name: 'Minsk',
        timezone: 'Europe/Minsk'
      }
    };

    const expectedResult = {
      currentCity: {
        adminArea: 'Minsk',
        country: 'Belarus',
        id: 100625144,
        lat: 53.900001526,
        lon: 27.566667557,
        name: 'Minsk',
        timezone: 'Europe/Minsk'
      }
    };

    expect(locationReducer(initialState, action)).toEqual(expectedResult);
  });

  it('Reducer should return state with added recent city data', () => {
    const initialState = { recentCities: [] };
    const action = {
      type: 'SET_RECENT_CITY',
      payload: {
        adminArea: 'Minsk',
        country: 'Belarus',
        id: 100625144,
        lat: 53.900001526,
        lon: 27.566667557,
        name: 'Minsk',
        timezone: 'Europe/Minsk'
      }
    };

    const expectedResult = {
      recentCities: [
        {
          adminArea: 'Minsk',
          country: 'Belarus',
          id: 100625144,
          lat: 53.900001526,
          lon: 27.566667557,
          name: 'Minsk',
          timezone: 'Europe/Minsk'
        }
      ]
    };

    expect(locationReducer(initialState, action)).toEqual(expectedResult);
  });
});
