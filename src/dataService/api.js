const TOKEN_URL = 'http://localhost:5000/token';

const IMAGES_URL = {
  symbol: 'https://developer.foreca.com/static/images/symbols/',
  flag: 'https://flagcdn.com/32x24/'
}

export async function getAccessTokenFromAPI() {
  const res = await fetch(TOKEN_URL);
  const data = await res.json();
 
  return data.access_token;
}

export function getImagesURL(type, param) {
  return IMAGES_URL[type] + param + '.png';
}
