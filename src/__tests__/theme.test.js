import themeReducer from '../redux/theme';

describe('theme reducer', () => {
  it('should return the initial state when passed an empty action', () => {
    const theme = 'light';
    const action = { type: '' };
    const result = themeReducer(theme, action);
    expect(result).toEqual('light');
  });
  it('should return dark value when dark theme is toggled', () => {
    const theme = 'light';
    const action = { type: 'TOGGLE_THEME' };
    const result = themeReducer(theme, action);
    expect(result).toEqual('dark');
  });
  it('should return light value when light theme is toggled', () => {
    const theme = 'dark';
    const action = { type: 'TOGGLE_THEME' };
    const result = themeReducer(theme, action);
    expect(result).toEqual('light');
  });
});
