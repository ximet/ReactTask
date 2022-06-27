function saveCookie(key, value) {
  document.cookie = `${key}=${value}`;
}

function loadCookie(key) {
  const cookie = document.cookie;
  return cookie.substring(cookie.indexOf('=') + 1);
}

function saveToken(token) {
  saveCookie('token', token);
}

function loadToken() {
  return loadCookie('token');
}

export const COOKIE = {
  saveToken,
  loadToken
};
