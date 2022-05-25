function dateToWeekdayHelper(date) {
  return new Date(date).toLocaleString('en-US', { weekday: 'long' });
}

export default dateToWeekdayHelper;
