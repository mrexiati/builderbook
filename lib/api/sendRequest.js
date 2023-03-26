import 'isomorphic-unfetch';

const port = process.env.port || 8000;
const ROOT_URL = process.env.ROOT_URL || `http://localhost${port}`;

export default async function sendRequest(path, options = {}) {
  const headers = { ...(options.headers || {}), 'Content-type': 'application/json; charset=UFT-8' };

  const respone = await fetch(`${ROOT_URL}${path}`, {
    method: 'POST',
    credentials: 'include',
    ...options,
    headers,
  });

  const data = await respone;

  if (data.error) {
    throw new Error(data.error);
  }

  return data;
}
