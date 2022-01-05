import localWeatherReducer from './localWeatherReducer';

describe('Authentication reducer', () => {
  it('Should return the initial state', () => {
    expect(localWeatherReducer(undefined, {})).toEqual({ data: {} });
  });

  it('Should handle AUTHENTICATE', () => {
    const authAction = {
      type: 'AUTHENTICATE'
    };
    expect(localWeatherReducer({}, authAction)).toEqual({});
  });
});
