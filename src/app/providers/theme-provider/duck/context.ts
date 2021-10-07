import * as React from 'react';
import { Context } from './types';

export default React.createContext<Context>({
  themeName: 'light',
  setThemeName: () => {},
});
