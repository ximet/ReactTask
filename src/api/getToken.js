const getToken = async (url, authData) => {
  const res = await fetch(url + '/authorize/token', {
    method: 'POST',
    body: JSON.stringify(authData)
  });
  const tokenData = await res.json();

  const token = `Bearer ${tokenData.access_token}`;

  return token;
};

export default getToken;
