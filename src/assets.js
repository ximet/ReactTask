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

export function getDayOfMonth(date) {
  const newDate = new Date(date);
  const month = newDate.toLocaleString('default', { month: 'long' });
  const day = newDate.getDate();

  return `${day} ${month}`;
}

export function formatTime(time) {
  const index = time.lastIndexOf(':');

  return time.slice(0, index);
}

export function formatDate(date) {
  const firstIndex = date.indexOf('T');
  const lastIndex = date.lastIndexOf('+');

  return date.slice(firstIndex + 1, lastIndex);
}

export function sortLocationsInfo(locationsInfo) {
  sortCountries(locationsInfo);

  locationsInfo.forEach(locationInfo => sortCities(locationInfo.cities));
}

function sortCountries(locationsInfo) {
  locationsInfo.sort((firstCountry, secondCountry) =>
    compareStrings(firstCountry.country, secondCountry.country)
  );
}

function sortCities(cities) {
  cities.sort((firstCity, secondCity) => compareStrings(firstCity, secondCity));
}

function compareStrings(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
