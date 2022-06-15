import { generateRegex } from './Regex';

export const Cookie = {
  getToken,
  setToken
};

function setToken(token) {
  setCookie('token', token);
}

function getToken() {
  return getCookie('token');
}

function setCookie(name, value) {
  document.cookie = `${name}=${value};max-age=3600`;
}

function getCookie(name) {
  const cookies = document.cookie;
  const regExp = generateRegex(name);
  const token = cookies.match(regExp);
  return token ? decodeURIComponent(token[1]) : undefined;
}
