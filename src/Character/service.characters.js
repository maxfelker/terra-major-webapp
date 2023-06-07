const apiURL = import.meta.env.VITE_CHARACTERS_API_URL;
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