import axios, { AxiosRequestConfig } from 'axios';

//param - location or id
function options(endpoint: string, param?: string): AxiosRequestConfig {
  const forecaUrl: string = 'https://pfa.foreca.com/api/v1/';
  const accessToken: string = document.cookie.slice(6);
  if (param) {
    return {
      url: forecaUrl + endpoint + param,
      withCredentials: false,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    };
  } else {
    return {
      url: endpoint,
      withCredentials: true
    };
  }
}

export async function getData(endpoint: string, param?: string): Promise<any> {
  if (param && options(endpoint, param).headers.Authorization.length < 10) {
    throw new Error('No token');
  } else {
    const { data } = await axios.request(options(endpoint, param));
    return data;
  }
}
