function getRecentCities() {
  return JSON.parse(localStorage.getItem('lastCity'));
}

export default getRecentCities;
