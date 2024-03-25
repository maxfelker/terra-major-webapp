import { AppConfigurationClient } from '@azure/app-configuration';

async function createClient() {
  const { VITE_AZURE_CONFIG_URL } = import.meta.env;
  const connectionString = isDefined(VITE_AZURE_CONFIG_URL) ? VITE_AZURE_CONFIG_URL : window.AZURE_CONFIG_URL;

  return new AppConfigurationClient(connectionString);
}

function isDefined(param) {
  return typeof param !== 'undefined';
}

export default async function setLocalSettings() {
  localStorage.clear();
  const {
    VITE_API_BASE_URL,
    VITE_BUILD_BASE_URL,
    VITE_BUILD_VERSION,
    VITE_CHARACTER_FBX_URL
  } = import.meta.env;

  if(isDefined(VITE_API_BASE_URL)) {
    localStorage.setItem('api-base-url', VITE_API_BASE_URL);
  }

  if(isDefined(VITE_BUILD_BASE_URL)) {
    localStorage.setItem('build-base-url', VITE_BUILD_BASE_URL);
  }

  if(isDefined(VITE_BUILD_VERSION)) {
    localStorage.setItem('build-version', VITE_BUILD_VERSION);
  }

  if(isDefined(VITE_CHARACTER_FBX_URL)) {
    localStorage.setItem('character-fbx-url', VITE_CHARACTER_FBX_URL);
  }

  const client = await createClient();
  const settings = client.listConfigurationSettings();
  if(settings.length > 0) {
    for await (const setting of settings) {
      const { key, value } = setting;
      const existingValue = localStorage.getItem(key);
      if(!existingValue){
        localStorage.setItem(key, value);
      }
    }
  } else {
    console.log("Could not connect to AZ App Config");
  }
  
}
