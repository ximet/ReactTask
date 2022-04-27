export const generateRegex = name =>
  new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)');
export const getWeatherIcon = symbol =>
  `https://developer.foreca.com/static/images/symbols/${symbol}.png`;
