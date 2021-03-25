import data from './axios-config';

export const refreshAccessToken = async () => {
  const {
    data: { access_token }
  } = await data.post('/auth');
  sessionStorage.setItem('token', JSON.stringify(access_token));
  return access_token;
};
