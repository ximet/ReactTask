import { getFromLocalStorage } from './localStorage';

const BASE_URL = 'https://pfa.foreca.com';

async function HTTPRequest(
  endpoint = '',
  { method = 'GET', body = '', headers = {} },
  params = {}
) {
  const token = getFromLocalStorage('token');

  const url = new URL(`${BASE_URL}${endpoint}`);
  const queryParams = new URLSearchParams(params);

  url.search = queryParams.toString();

  const request = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
      ...headers
    },
    body: body || null
  });

  const result = request.json();

  if (!request.ok) {
    throw new Error('error in request');
  }

  return result;
}

export default HTTPRequest;
