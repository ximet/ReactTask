// const axios = require('axios').default;

// axios
//   .get('https://pfa.foreca.com/api/v1/capabilities', {
//     headers: {
//       'X-Requested-With': 'XMLHttpRequest',
//       'Content-type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//       authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9mbnc2LmZvcmVjYS5jb21cL2F1dGhvcml6ZVwvdG9rZW4iLCJpYXQiOjE1MjYzMDAzODAsImV4cCI6MTUyNjMwMzk4MCwibmJmIjoxNTI2MzAwMzgwLCJqdGkiOiJxSXl3WVlQNjc1NkczejBEIiwic3ViIjoibFFHa1Y4Z2pIeGUyZU1ibndUUUs4NktqVTY3RXJlS2htenY1IiwicHJ2IjoiYWY3YTAzOThkZGNiNWE3YTUzN2Q3YzdkMjU2NWEyZjgxZGM4ZTQxNCJ9.V8xg6L9yrY9__VH-jdrL_CqXisEpgcfdUa0NoxlGz0k`
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//     console.log(22);
//   });

import axios from 'axios';

const MAIN_URL = 'https://pfa.foreca.com/api/v1';
const TOKEN_URL = 'http://localhost:9020/token';

const generateRegex = name =>
  new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)');

const Cookie = {
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

const weatherAPI = axios.create({
  baseURL: MAIN_URL,
  headers: { authorization: `Bearer ${Cookie.getToken()}` }
});

async function getTokenFromAPI() {
  try {
    const response = await axios.get(TOKEN_URL);
    console.log(response);
    return response.data.access_token;
  } catch (error) {
    console.warn(error);
  }
}
getTokenFromAPI();

const getCurrentWeatherInfo = async () => {
  const { data: weatherData } = await weatherAPI.get(`current/location=${14},${22}`);
  console.log(weatherData);
};

// getCurrentWeatherInfo({
//   coords: {
//     longitude: 12,
//     latitude: 32
//   }
// });
// getCurrentWeatherInfo();
