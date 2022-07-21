function saveData(data) {
  localStorage.setItem('formData', JSON.stringify(data));
}

function loadState() {
  try {
    const serialState = localStorage.getItem('favCityList');
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    return undefined;
  }
}

function saveState(state) {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem('favCityList', serialState);
  } catch (err) {
    console.log(err);
  }
}

export { saveData, loadState, saveState };