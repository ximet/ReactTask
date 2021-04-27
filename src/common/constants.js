export const BASE_URL = 'https://pfa.foreca.com/api/v1';

export const ENTER_KEYCODE = 13;
export const MAX_ITEMS_LENGTH = 4;

export const ERRORS = {
  NOT_FOUND: {
    status: 404,
    message: 'Not Found'
  },
  AUTH_ERROR: {
    status: 401,
    message: 'Unauthorized'
  },
  DEFAULT: {
    status: '4xx/5xx',
    message: 'Oh, no, something went wrong'
  }
};

export const COLORS = {
  white_regular: '#ffffff',
  white_dark: '#f3f3f3',
  blue_regular: '#66ccff',
  grey_light: '#e4faff',
  grey_regular: '#f3f3f3',
  grey_dark: '#282c34',
  black_regular: '#222222',
  red_regular: '#ff0000'
};

export const THEMES = {
  light: 'light',
  dark: 'dark'
};

export const FEEDBACK = 'feedback';
