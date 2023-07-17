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

export async function signUp(account) {
  const url = `${apiURL}/signup`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(account),
  });
  return await response.json();
}

export async function getMyAccount() {
  
  const token = sessionStorage.getItem('account-token');
  const url = `${apiURL}/me`;
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  if(response.status === 401) {
    return { error: 'Token is invalid'}
  }
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

export async function updatePassword(payload) {
  const token = sessionStorage.getItem('account-token');
  const response = await fetch(`${apiURL}/my/password`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return await response.json();
}

export function setAccountToken(token) {
  sessionStorage.setItem('account-token', token);
}

export function logout(){
  sessionStorage.clear();
}

