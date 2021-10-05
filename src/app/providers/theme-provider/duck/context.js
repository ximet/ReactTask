import * as React from 'react';
import { LIGHT } from 'constants/theme';

export default React.createContext({
  themeName: LIGHT,
  setThemeName: () => {},
});
