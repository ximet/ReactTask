import { newReg } from '../config/constants';

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
  document.cookie = `${name}=${value}`;
}

function getCookie(name) {
  const cookies = document.cookie;
  const regExp = newReg(name);
  const token = cookies.match(regExp);
  return token ? decodeURIComponent(token[1]) : undefined;
}
