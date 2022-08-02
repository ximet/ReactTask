function loadState(name) {
  try {
    const serialState = localStorage.getItem(name);
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    return undefined;
  }
}

function saveState(name, state) {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem(name, serialState);
  } catch (err) {
    console.log(err);
  }
}

export { loadState, saveState };
