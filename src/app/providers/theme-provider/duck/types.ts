import * as React from 'react';
import { Enums } from 'types';

export interface Context {
  themeName: Enums.ThemeName;
  setThemeName: React.Dispatch<React.SetStateAction<Enums.ThemeName>>;
}
