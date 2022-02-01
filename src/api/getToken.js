const getToken = async (url, authData) => {
  const res = await fetch(url + '/authorize/token');
  const token = await res.text();

  return `Bearer ${token}`;
};

export default getToken;
