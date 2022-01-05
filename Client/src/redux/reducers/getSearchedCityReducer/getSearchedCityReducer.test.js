import getSearchedCityReducer from './getSearchedCityReducer';

describe('Authentication reducer', () => {
  it('Should return the initial state', () => {
    expect(getSearchedCityReducer(undefined, {})).toEqual({ data: {} });
  });

  it('Should handle AUTHENTICATE', () => {
    const authAction = {
      type: 'AUTHENTICATE'
    };
    expect(getSearchedCityReducer({}, authAction)).toEqual({});
  });
});
