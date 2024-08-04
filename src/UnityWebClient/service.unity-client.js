function apiUrl() {
  return localStorage.getItem('apiBaseUrl');
}

function baseUrl() {
  return `${apiUrl()}/tokens`;
}

export async function createUnityClientToken(characterId) {
  const token = sessionStorage.getItem('account-token');
  const payload = {
    characterId
  };
  const response = await fetch(baseUrl(), {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  
  return await response.json();
}