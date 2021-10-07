import { proxyServer, weatherApi } from './index';
import { urls } from '../globalConsts';

export const getAccessToken = async () => {
  try {
    const { data } = await proxyServer.post(urls.accessToken);
    return data.access_token;
  } catch (e) {
    console.error(e);
  }
};
