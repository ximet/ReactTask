import { getAccessToken } from './cookies';

async function request(requestUrl: string, isTokenRequired: boolean = false) {
  try {
    const token = getAccessToken();
    const headers = {};
    let url = requestUrl;

    if (isTokenRequired) {
      url += `&token=${token}`;
    }

    const responce = await fetch(url, { headers });
    return responce.json();
  } catch (error) {
    return error.message;
  }
}

export default request;
