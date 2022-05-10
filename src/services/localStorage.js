export const Storage = {
  setReview,
  getItem,
  setTheme,
  getTheme
};

function setReview(review) {
  const feedback = getItem('feedback') || [];
  feedback.push(review);

  setItem('feedback', feedback);
}

function setItem(name, item) {
  return localStorage.setItem(name, JSON.stringify(item));
}

function getItem(name) {
  return JSON.parse(localStorage.getItem(name));
}

function setTheme(theme) {
  return setItem('isDarkTheme', theme);
}

function getTheme() {
  return getItem('isDarkTheme');
}
