const URL = 'https://pfa.foreca.com/api/v1';
const TOKEN = process.env.TOKEN as string;

async function HTTPRequest(
  endpoint = '',
  { method = 'GET', body = null, headers = { 'Content-Type': 'application/json' } }
) {
  const request = await fetch(`${URL}${endpoint}`, {
    method,
    headers: {
      authorization: `Bearer ${TOKEN}`,
      ...headers
    },
    body
  });

  const result = request.json();

  if (!request.ok) {
    throw new Error('error in request');
  }

  return result;
}

export default HTTPRequest;
