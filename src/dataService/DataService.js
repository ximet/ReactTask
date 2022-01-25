const WEATHER_API_URL = 'https://pfa.foreca.com';

export async function getAccessToken() {
  const res = await fetch('http://localhost:3000/weather');
  const data = await res.json();

  return data.access_token;
}
