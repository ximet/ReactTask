import {
  dateFormat,
  fullDateOptions,
  dateOptions,
  timeOptions,
  dayOfWeekOptions
} from '../constants/date';

export function getFormattedCurrentDate(timeZone) {
  const currentDate = new Date();

  const date = currentDate.toLocaleString(dateFormat, { ...fullDateOptions, timeZone });
  const time = currentDate.toLocaleString(dateFormat, { ...timeOptions, timeZone });

  return { date, time };
}

export function getFormattedDate(formDate) {
  formDate = new Date(formDate);
  const date = formDate.toLocaleString(dateFormat, dateOptions);
  const dayOfWeek = formDate.toLocaleString(dateFormat, dayOfWeekOptions);

  return { date, dayOfWeek };
}

export function getFormattedChartTime(time, timeZone) {
  const date = new Date(time);
  const chartTime = date.toLocaleTimeString(dateFormat, { ...timeOptions, timeZone });

  return chartTime;
}

export function getCurrentYear() {
  return new Date().getFullYear();
}
