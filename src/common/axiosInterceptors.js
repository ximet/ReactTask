import axios from 'axios';
import { getToken } from './getToken';
import { unauthorizedStatus } from './constants';
const axiosApiInstance = axios.create();

// Request interceptor
axiosApiInstance.interceptors.request.use(
  function (request) {
    const token = localStorage.getItem('token');
    request.headers = {
      Authorization: `Bearer ${token}`
    };

    request.cancelToken = axios.CancelToken.source().token;

    return request;
  },
  function (error) {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (error.response.status === unauthorizedStatus && !originalRequest._retry) {
      originalRequest._retry = true;
      const token = await getToken();
      axios.headers = {
        Authorization: `Bearer ${token}`
      };
      return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
