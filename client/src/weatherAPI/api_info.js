export const BASE_URL = 'https://pfa.foreca.com/api/v1/';
export const BASE_URL_ICONS = 'https://developer.foreca.com/static/images/symbols/';
export const QUERIES = {
  LOCATION: 'location/',
  LOCATION_BY_QUERY: 'location/search/',
  CURRENT_WEATHER: 'current/',
  DAILY_WEATHER: 'forecast/daily/'
};

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wZmEuZm9yZWNhLmNvbVwvYXV0aG9yaXplXC90b2tlbiIsImlhdCI6MTYzNzU4NTUwMywiZXhwIjo5OTk5OTk5OTk5LCJuYmYiOjE2Mzc1ODU1MDMsImp0aSI6ImFjYmJlMjNlZWMyNTM2NTkiLCJzdWIiOiJrc2VuaWF0dWxpa292YSIsImZtdCI6IlhEY09oakM0MCtBTGpsWVR0amJPaUE9PSJ9.BiUcudFTFSHMp_pNBE8HYcKxOF7JS3whBIHaijiO5gY';

export const AUTHENTICATION = {
  Authorization: `Bearer ${token}`
};
