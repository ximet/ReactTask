const setCookie = (key, value, lifeTime) => {
  document.cookie = `${key}=${value}; max-age=${lifeTime * 3600}`;
};

const getCookie = (key) => {
  const { cookie } = document;
  const result = cookie.split('; ').filter((element) => element.includes(key));

  return result.length
    ? result.toString().split('=')[1]
    : null;
};

const deleteCookie = (key) => {
  document.cookie = `${key}=''; max-age=0`;
};

const getAccessToken = () => getCookie('token');

export {
  setCookie,
  getCookie,
  deleteCookie,
  getAccessToken,
};
