const setCookie = (key: string, value: string, lifeTime: number): void => {
  document.cookie = `${key}=${value}; max-age=${lifeTime * 3600}`;
};

const getCookie = (key: string): string | null => {
  const { cookie } = document;
  const result = cookie.split('; ').filter((element) => element.includes(key));

  return result.length
    ? result.toString().split('=')[1]
    : null;
};

const deleteCookie = (key: string): void => {
  document.cookie = `${key}=''; max-age=0`;
};

const getAccessToken = (): string => getCookie('token');

export {
  setCookie,
  getCookie,
  deleteCookie,
  getAccessToken,
};
