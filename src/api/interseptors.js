import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  async function (config) {
    let token = Cookies.get('token');

    if (!token) {
      const response = await axios.post('/auth/get-token', {});
      token = response.data.token;
    }
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
