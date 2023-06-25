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
  const response = await fetch(`${apiURL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(account),
  });
  return await response.json();
}

export async function updatePassword(accountId, payload) {
  const apiResponse = await fetch(`${baseUrl}/${accountId}/update-password`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const response = {
    status: apiResponse.status
  }
  if(response.status !== 200) {
    const json = await apiResponse.json();
    response.error = json.error
  }

  return response;
}

