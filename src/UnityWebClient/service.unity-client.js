import { getActiveAccount, getActiveCharacter, getActiveSandbox } from "../App/service.app";

const apiURL = import.meta.env.VITE_TERRA_MAJOR_API_URL;
const baseUrl = `${apiURL}/tokens`;

export async function createUnityClientToken(characterId) {
  const token = sessionStorage.getItem('account-token');
  const payload = {
    characterId
  };
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  
  return await response.json();
}