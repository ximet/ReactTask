import { dateFormat, dateOptions, timeOptions } from '../constants/date';

export function getFormattedDate() {
  const currentDate = new Date();

  const date = currentDate.toLocaleString(dateFormat, dateOptions);
  const time = currentDate.toLocaleString(dateFormat, timeOptions);

  return { date, time };
}
