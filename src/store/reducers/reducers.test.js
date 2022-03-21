import { themeReducer, locationReducer } from '.';
import { setTheme, setLocation } from '../actions';

const testThemeState = 'dark';
const testLocationState = {};

describe('reducers', () => {
  it('test set theme', () => {
    const newState = themeReducer(testThemeState, setTheme('light'));

    expect(newState).toBe('light');
  });

  it('test set location', () => {
    const newState = locationReducer(
      testLocationState,
      setLocation({ name: 'Tbilisi', country: 'Georgia' })
    );

    expect(newState).toEqual({ name: 'Tbilisi', country: 'Georgia' });
  });
});
