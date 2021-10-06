function getFormattedCurrentTime() {
  const dateObj = new Date();
  const hours = dateObj.getHours().toString().padStart(2, '0');
  const minutes = dateObj.getMinutes().toString().padStart(2, '0');
  const seconds = dateObj.getSeconds().toString().padStart(2, '0');

  console.log('func:', Date.now());
  return `${hours}:${minutes}:${seconds}`;
}

export { getFormattedCurrentTime };
