const removeElementNumber = 1;

export function addRecentCity(recentCities, cityToAdd) {
  const existingRecentCity = recentCities.find(city => city.id === cityToAdd.id);

  if (existingRecentCity) {
    const cityIndex = recentCities.indexOf(existingRecentCity);
    recentCities.splice(cityIndex, removeElementNumber);
  }

  return [cityToAdd, ...recentCities];
}

export function removeRecentCity(recentCities, cityToRemove) {
  const cityIndex = recentCities.indexOf(cityToRemove);
  
  return recentCities.splice(cityIndex, removeElementNumber);
}
