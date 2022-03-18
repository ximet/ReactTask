import { SET_THEME, SET_TOKEN } from './types';

interface StoreInterface {
  theme: string,
  token: string,
}

interface setThemeInterface {
  type: typeof SET_THEME,
  payload: string,
}

interface setTokenInterface {
  type: typeof SET_TOKEN,
  payload: string,
}

export { setThemeInterface, setTokenInterface, StoreInterface };
