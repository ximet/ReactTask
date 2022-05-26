export const generateRegex = name =>
  new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)');
export const getWeatherIcon = symbol =>
  `https://developer.foreca.com/static/images/symbols/${symbol}.png`;
export const formatDate = date => new Date(date).toString().slice(4, 21);
