import { setCurrentTheme } from '../actions/themeActions';

describe('Theme Action', () => {
  it('Action should return SET_CURRENT_THEME action', () => {
    const theme = 'dark';

    const expectedResult = {
      type: 'SET_CURRENT_THEME',
      payload: {
        themeName: 'dark'
      }
    };

    expect(setCurrentTheme(theme)).toEqual(expectedResult);
  });
});
