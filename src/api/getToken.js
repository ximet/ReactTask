const getToken = async url => {
  const res = await fetch(url + '/authorize/token');
  const token = await res.text();

  return `Bearer ${token}`;
};

export default getToken;
