import { location } from './locationReducer';
import { SET_LOCATION } from '../actions/locationAction';

describe('Location Reduceer', () => {
  it('should return setted location state when SET_LOCATION action is required', () => {
    const action = {
      type: SET_LOCATION,
      payload: {
        location: {
          id: 1,
          country: 'country',
          name: 'name',
          lon: 1,
          lat: 1
        }
      }
    };

    const initialState = {
      id: 0,
      name: '',
      country: '',
      lon: 0,
      lat: 0
    };

    const expectedState = {
      id: 1,
      country: 'country',
      name: 'name',
      lon: 1,
      lat: 1
    };
    expect(location(initialState, action)).toEqual(expectedState);
  });

  it(`should return the default state if action doesn't exist`, () => {
    const nonExistingAction = { type: 'NON_EXISTING_ACTION' };

    expect(typeof location(undefined, nonExistingAction)).toEqual('object');
  });
});
