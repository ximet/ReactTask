import { defaultDateOptions, defaultTimeOptions, dateFormat } from '../globalConsts';

export const formatDate = (
  unformattedDate,
  dateOptions = defaultDateOptions,
  timeOptions = defaultTimeOptions
) => {
  const fullDate = new Date(unformattedDate);

  const date = fullDate.toLocaleString(dateFormat, dateOptions);
  const time = fullDate.toLocaleString(dateFormat, timeOptions);
  return { date, time };
};

export const getCurrentTimeByTimeZone = timeZone => {
  console.log('timezone', timeZone);
  return new Date().toLocaleString(dateFormat, { timeZone: timeZone });
};
