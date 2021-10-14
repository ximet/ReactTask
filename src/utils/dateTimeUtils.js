function getFormattedCurrentTime() {
  const padSymbol = '0';
  const padStringLength = 2;

  const dateObj = new Date();
  const hours = dateObj.getHours().toString().padStart(padStringLength, padSymbol);
  const minutes = dateObj.getMinutes().toString().padStart(padStringLength, padSymbol);
  const seconds = dateObj.getSeconds().toString().padStart(padStringLength, padSymbol);

  return `${hours}:${minutes}:${seconds}`;
}

function formatTime(time) {
  const padSymbol = '0';
  const padStringLength = 2;

  const dateObj = new Date(time);
  const hours = dateObj.getHours().toString().padStart(padStringLength, padSymbol);
  const minutes = dateObj.getMinutes().toString().padStart(padStringLength, padSymbol);

  return `${hours}:${minutes}`;
}

function getDayShort(time, locale) {
  const dateObj = new Date(time);

  return dateObj.toLocaleDateString(locale, { weekday: 'short' });
}

function getDay(time, locale) {
  const dateObj = new Date(time);

  return dateObj.toLocaleDateString(locale, { weekday: 'long' });
}

export { getFormattedCurrentTime, formatTime, getDayShort, getDay };
