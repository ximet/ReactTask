function getCitiesFromLS() {
  return JSON.parse(localStorage.getItem('lastCity'));
}

export default getCitiesFromLS;
