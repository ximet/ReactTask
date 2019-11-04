const weekDayNamesEng = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const makeGetDayOfTheWeek = (weekDayNames) => (date) => weekDayNames[date.getDay()];
export const getDayOfTheWeekName = makeGetDayOfTheWeek(weekDayNamesEng);
export const getDateTime = (date) =>
  `${date.getHours()}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;
