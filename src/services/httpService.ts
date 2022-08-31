import { getFromLocalStorage } from './localStorage';

const URL = 'https://pfa.foreca.com';

async function HTTPRequest(endpoint = '', { method = 'GET', body = '', headers = {} }) {
  const token = getFromLocalStorage('token');

  const request = await fetch(`${URL}${endpoint}`, {
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
