const apiURL = import.meta.env.VITE_TERRA_MAJOR_API_URL;
const baseUrl = `${apiURL}/accounts`;

export async function createAccount(account) {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(account),
  });
  return await response.json();
}

export async function retrieveAccount(id) {
  const response = await fetch(`${baseUrl}/${id}`);
  return await response.json();
}

export async function login(account) {
  const response = await fetch(`${baseUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(account),
  });
  return await response.json();
}
