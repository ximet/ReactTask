import {
  dateFormat,
  fullDateOptions,
  dateOptions,
  timeOptions,
  dayOfWeekOptions
} from '../constants/date';

export function getFormattedCurrentDate() {
  const currentDate = new Date();
  const date = currentDate.toLocaleString(dateFormat, fullDateOptions, dateOptions);
  const time = currentDate.toLocaleString(dateFormat, timeOptions);

  return { date, time };
}

export function getFormattedDate(formDate) {
  formDate = new Date(formDate);
  const date = formDate.toLocaleString(dateFormat, dateOptions);
  const dayOfWeek = formDate.toLocaleString(dateFormat, dayOfWeekOptions);

  return { date, dayOfWeek };
}

export function getCurrentYear() {
  return new Date().getFullYear();
}
