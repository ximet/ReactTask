import { locationReducer } from './locationReducer';
import { SET_CURRENT_LOCATION } from '../types/locationTypes';

const currentLocation = {
  location: {
    id: 100625144,
    name: 'Minsk',
    country: 'Belarus',
    timezone: 'Europe/Minsk',
    adminArea: 'Minsk',
    lat: 53.900001526,
    lon: 27.566667557
  }
};

describe('Location reducer', () => {
  it('Initial state', () => {
    const initialState = { currentLocation: {}, recentCities: [] };
    const action = { type: 'UNDEFINED' };

    expect(locationReducer(initialState, action)).toEqual(initialState);
  });

  it('State with current location data', () => {
    const initialState = { location: {} };
    const action = {
      type: SET_CURRENT_LOCATION,
      payload: currentLocation
    };

    const expectedResult = currentLocation;

    expect(locationReducer(initialState, action)).toEqual(expectedResult);
  });
});
