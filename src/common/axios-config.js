import axios from 'axios';
import { refreshAccessToken } from './auth';
import { ERRORS } from './constants';

const axiosInstance = axios.create();
let cancelTokenSource = axios.CancelToken.source();

const cancelRequest = () => {
  cancelTokenSource.cancel();
  cancelTokenSource = axios.CancelToken.source();
};

const areRequestsCanceled = err => {
  return err && axios.isCancel(err);
};

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
  config => {
    const token = JSON.parse(sessionStorage.getItem('token'));
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`
      };
    }

    config.cancelToken = cancelTokenSource.token;

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
  error => {
    const originalRequest = error.config;
    // if server sends 'unauthorized'
    // and is not already trying to make the request again,
    // initiate a request to update the token
    // and make the initial request again
    if (error.response) {
      if (
        (error.response.status === ERRORS.AUTH_ERROR.status ||
          error.response.data.message === ERRORS.AUTH_ERROR.message) &&
        !originalRequest.isRetrying
      ) {
        originalRequest.isRetrying = true;

        return refreshAccessToken().then(_ => axiosInstance(originalRequest));
      }
    }
    return Promise.reject(error);
  }
);

export { cancelRequest, areRequestsCanceled };
export default axiosInstance;
