const saveLastCityToLocalStorage = (city, id) => {
  try {
    const savedCities = JSON.parse(localStorage.getItem('lastCity')) || [];
    const alreadyStored = savedCities.some(savedCity => savedCity.city === city);
    if (alreadyStored) return;
    savedCities.push({ city: city, cityId: id });
    localStorage.setItem('lastCity', JSON.stringify(savedCities));
  } catch (err) {
    console.error(err);
  }
};

export default saveLastCityToLocalStorage;
