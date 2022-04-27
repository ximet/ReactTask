export const TOKEN_URL = 'http://localhost:8080/token';
export const MAIN_URL = 'https://pfa.foreca.com/api/v1';
export const newReg = name =>
  new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)');
export const symbol = symbol => `https://developer.foreca.com/static/images/symbols/${symbol}.png`;
