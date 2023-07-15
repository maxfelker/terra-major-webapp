const apiURL = import.meta.env.VITE_TERRA_MAJOR_API_URL;
const baseUrl = `${apiURL}/characters`;

export async function createCharacter(character) {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(character),
  });
  return await response.json();
}

export async function retrieveCharacter(id) {
  const response = await fetch(`${baseUrl}/${id}`);
  return await response.json();
}

export async function updateCharacter(id, character) {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(character),
  });
  return await response.json();
}

export async function archiveCharacter(id) {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return await response.json();
}

export async function getCharacters() {
  const response = await fetch(baseUrl);
  return await response.json();
}

export async function getMyCharacters() {
  const token = sessionStorage.getItem('account-token');
  const url = `${apiURL}/my/characters`;
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return await response.json();
}