function dateToWeekdayHelper(date) {
  const weekDay = new Date(date).toLocaleString('en-US', { weekday: 'long' });

  return weekDay
}

export default dateToWeekdayHelper;
