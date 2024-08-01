function isDefined(param) {

  return typeof param !== 'undefined';
}

function getViteVars() {
  console.log('Using local .env vite variables');
  const {
    VITE_API_BASE_URL,
    VITE_BUILD_BASE_URL,
    VITE_BUILD_VERSION,
    VITE_CHARACTER_FBX_URL,
    VITE_DOWNLOAD_URL,
    VITE_DISCORD_URL
  } = import.meta.env;
  
  return {
    VITE_API_BASE_URL,
    VITE_BUILD_BASE_URL,
    VITE_BUILD_VERSION,
    VITE_CHARACTER_FBX_URL,
    VITE_DOWNLOAD_URL,
    VITE_DISCORD_URL
  };
}

async function getNodeVars() {
  console.log('Retrieveing node .env variables');
  const response = await fetch('/config');
  console.log('response', response);
  return await response.json();
}

function determineConfig(){
  if(isDefined(import.meta.env)) {
    return getViteVars();
  }
  return getNodeVars();
}

export async function setLocalStorageConfigs() {
  const {
    VITE_API_BASE_URL,
    VITE_BUILD_BASE_URL,
    VITE_BUILD_VERSION,
    VITE_CHARACTER_FBX_URL,
    VITE_DOWNLOAD_URL,
    VITE_DISCORD_URL
  } = determineConfig();
  
  localStorage.clear();

  if(isDefined(VITE_DOWNLOAD_URL)) {
    localStorage.setItem('downloadUrl', VITE_DOWNLOAD_URL);
  }

  if(isDefined(VITE_API_BASE_URL)) {
    localStorage.setItem('apiBaseUrl', VITE_API_BASE_URL);
  }

  if(isDefined(VITE_BUILD_BASE_URL)) {
    localStorage.setItem('buildBaseUrl', VITE_BUILD_BASE_URL);
  }

  if(isDefined(VITE_BUILD_VERSION)) {
    localStorage.setItem('buildVersion', VITE_BUILD_VERSION);
  }

  if(isDefined(VITE_CHARACTER_FBX_URL)) {
    localStorage.setItem('characterFbxUrl', VITE_CHARACTER_FBX_URL);
  }

  if(isDefined(VITE_DISCORD_URL)) {
    localStorage.setItem('discordUrl', VITE_DISCORD_URL);
  }

}
