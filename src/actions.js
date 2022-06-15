import axios from 'axios';

//const apiURL = 'https://pfa.foreca.com/api';
const accToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9mbnc2LmZvcmVjYS5jb21cL2F1dGhvcml6ZVwvdG9rZW4iLCJpYXQiOjE1MjYzMDAzODAsImV4cCI6MTUyNjMwMzk4MCwibmJmIjoxNTI2MzAwMzgwLCJqdGkiOiJxSXl3WVlQNjc1NkczejBEIiwic3ViIjoibFFHa1Y4Z2pIeGUyZU1ibndUUUs4NktqVTY3RXJlS2htenY1IiwicHJ2IjoiYWY3YTAzOThkZGNiNWE3YTUzN2Q3YzdkMjU2NWEyZjgxZGM4ZTQxNCJ9.V8xg6L9yrY9__VH-jdrL_CqXisEpgcfdUa0NoxlGz0k';

const authAxios = axios.create({
  headers: {
    Authorization: `Bearer ${accToken}`
  },
  data: {
    username: process.env.REACT_APP_AUTH_USERNAME,
    password: process.env.REACT_APP_AUTH_PASSWORD
  },
  withCredentials: true
});

export const fetchPosts = () => async (dispatch, getState) => {
  const response = await authAxios.post('/authorize/token');
  console.log(response);
  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  });
};
