import axios from 'axios';
import { refreshAccessToken } from './auth';
import { AUTH_ERROR } from './constants';

const axiosInstance = axios.create();
// axios instances seem not to have a cancel token, so fixing that here
axiosInstance.CancelToken = axios.CancelToken;

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
  async config => {
    const token = JSON.parse(sessionStorage.getItem('token'));
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`
      };
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// Response interceptor to refresh expired tokens
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    // if server sends 'unauthorized' & the user has 'logged in',
    // initiate a request to update the token
    // add the token to the current headers and make the initial request again
    if (
      (error.response.status === AUTH_ERROR.STATUS ||
        error.response.data.message === AUTH_ERROR.MESSAGE) &&
      !!JSON.parse(sessionStorage.getItem('token'))
    ) {
      return refreshAccessToken().then(access_token => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
        return axios(originalRequest);
      });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
