function getFormattedCurrentTime() {
  const padSymbol = '0';
  const padStringLength = 2;

  const dateObj = new Date();
  const hours = dateObj.getHours().toString().padStart(padStringLength, padSymbol);
  const minutes = dateObj.getMinutes().toString().padStart(padStringLength, padSymbol);
  const seconds = dateObj.getSeconds().toString().padStart(padStringLength, padSymbol);

  return `${hours}:${minutes}:${seconds}`;
}

export { getFormattedCurrentTime };
