import authenticationReducer from './authenticationReducer';

describe('Authentication reducer', () => {
  it('Should return the initial state', () => {
    expect(authenticationReducer(undefined, {})).toEqual({ data: {} });
  });

  it('Should handle AUTHENTICATE', () => {
    const authAction = {
      type: 'AUTHENTICATE'
    };
    expect(authenticationReducer({}, authAction)).toEqual({});
  });
});
