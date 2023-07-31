function apiUrl() {
  return localStorage.getItem('api-base-url');
}

function baseUrl() {
  return `${apiUrl()}/characters`;
}
export async function createCharacter(character) {
  const token = sessionStorage.getItem('account-token');
  const response = await fetch(baseUrl(), {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(character),
  });
  return await response.json();
}

export async function retrieveCharacter(id) {
  const response = await fetch(`${baseUrl()}/${id}`);
  return await response.json();
}

export async function updateCharacter(id, character) {
  const response = await fetch(`${baseUrl()}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(character),
  });
  return await response.json();
}

export async function archiveCharacter(id) {
  const response = await fetch(`${baseUrl()}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return await response.json();
}

export async function getMyCharacters() {
  const token = sessionStorage.getItem('account-token');
  const url = `${apiUrl()}/my/characters`;
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return await response.json();
}