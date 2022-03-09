import { themeReducer, tokenReducer } from './reducers';
import { setTheme as setThemeAction, setToken as setTokenAction } from './actions';

const initialState = '';

describe('Reducers', () => {
  it('set theme reducer', () => {
    const newState = themeReducer(initialState, setThemeAction('light'));

    expect(newState).toBe('light');
  });

  it('set token reducer', () => {
    const newState = tokenReducer(initialState, setTokenAction('token12345TOKEN'));

    expect(newState).toBe('token12345TOKEN');
  });
});
