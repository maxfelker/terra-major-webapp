import { getActiveAccount, getActiveCharacter, getActiveSandbox } from "../App/service.app";

const apiURL = import.meta.env.VITE_TERRA_MAJOR_API_URL;
const baseUrl = `${apiURL}/tokens`;

export async function createUnityClientToken() {
  const payload = {
    "accountId": getActiveAccount(),
    "sandboxId": getActiveSandbox(),
    "characterId": getActiveCharacter()
  };
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  
  return await response.json();
}