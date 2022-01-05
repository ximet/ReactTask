import getCurrentSavedCityReducer from './getCurrentSavedCityReducer';

describe('Authentication reducer', () => {
  it('Should return the initial state', () => {
    expect(getCurrentSavedCityReducer(undefined, {})).toEqual({ data: {} });
  });

  it('Should handle AUTHENTICATE', () => {
    const authAction = {
      type: 'AUTHENTICATE'
    };
    expect(getCurrentSavedCityReducer({}, authAction)).toEqual({});
  });
});
