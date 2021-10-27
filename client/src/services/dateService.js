import { defaultDateOptions, defaultTimeOptions, dateFormat, hoursOptions } from '../globalConsts';

export const formatDate = (
  unformattedDate,
  dateOptions = defaultDateOptions,
  timeOptions = defaultTimeOptions
) => {
  const fullDate = new Date(unformattedDate);

  const date = fullDate.toLocaleString(dateFormat, dateOptions);
  const time = fullDate.toLocaleString(dateFormat, timeOptions);
  const hours = fullDate.toLocaleString(dateFormat, hoursOptions).split([' ']);
  return { date, time, hours: hours[0], dayTime: hours[1] };
};

export const getCurrentTimeByTimeZone = timeZone => {
  return new Date().toLocaleString(dateFormat, { ...timeOptions, timeZone: timeZone });
};
