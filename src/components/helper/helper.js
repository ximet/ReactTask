const getLocalHours = currentdate => currentdate.getHours();

const getLocalUnit = (currentdate, getUnit) => {
  const unit = currentdate[getUnit]();
  if (unit < 10) {
    return `0${unit}`;
  }
  return unit;
};

export const getTime = () => {
  const currentdate = new Date();
  const hour = getLocalHours(currentdate);
  const min = getLocalUnit(currentdate, 'getMinutes');
  const sec = getLocalUnit(currentdate, 'getSeconds');
  const currentTime = hour + ':' + min + ':' + sec;
  return currentTime;
};
