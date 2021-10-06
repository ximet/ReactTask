import * as React from 'react';
import { IContext } from './types';

export default React.createContext<IContext>({
  themeName: 'light',
  setThemeName: () => {},
});
