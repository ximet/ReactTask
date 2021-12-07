const saveLastCityToLS = (city, id) => {
  let stuffInLs = JSON.parse(localStorage.getItem('lastCity'));

  function checkIfCityExists() {
    let exists = Boolean;
    stuffInLs
      ? stuffInLs.forEach(lsCity => {
          if (lsCity.city === city) {
            return (exists = true);
          } else return (exists = false);
        })
      : (exists = false);
    return exists;
  }

  if (checkIfCityExists()) {
    return;
  } else if (stuffInLs) {
    stuffInLs.push({ city: city, cityId: id });
    localStorage.setItem('lastCity', JSON.stringify(stuffInLs));
  } else {
    localStorage.setItem('lastCity', JSON.stringify([{ city: city, cityId: id }]));
  }
};

export default saveLastCityToLS;
