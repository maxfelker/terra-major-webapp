const apiURL = import.meta.env.VITE_TERRA_MAJOR_API_URL;
const baseUrl = `${apiURL}/tokens`;

export async function createUnityClientToken() {
  const payload = {
    "accountId": "c5a406d6-a109-4dfb-b922-dbee23d867f7",
    "sandboxId": "2cb9bb72-a45a-4e3b-aad5-717fec9291ea",
    "characterId": "a87f0472-3c12-4a8b-a5b7-89f467f13eac"
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