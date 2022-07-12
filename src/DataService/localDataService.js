function saveData(data) {
  localStorage.setItem('formData', JSON.stringify(data));
}

export { saveData };
