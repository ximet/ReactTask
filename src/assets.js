export function upperCaseLetter(word) {
  return word[0].toUpperCase() + word.slice(1);
}

export function getDayOfWeek(date, dataset = 'concise') {
  const DAYS_NAMES_CONCISE = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const DAYS_NAMES_FULL = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  const newDate = new Date(date);
  const dayIndex = newDate.getDay();

  return dataset === 'full' ? DAYS_NAMES_FULL[dayIndex] : DAYS_NAMES_CONCISE[dayIndex];
}
