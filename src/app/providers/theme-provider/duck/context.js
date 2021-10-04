import { createContext } from 'react';
import { LIGHT } from 'constants/theme';

export default createContext({
  themeName: LIGHT,
  setThemeName: () => {},
});
