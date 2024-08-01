function isDefined(param) {

  return typeof param !== 'undefined';
}

function getViteVars() {
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
  const response = await fetch('http://localhost:3000/config');

  return await response.json();
}

export async function setLocalStorageConfigs() {

  let config = {};
  if(import.meta) {
    config = getViteVars();
  } else {
    config = getNodeVars();
  }

  const {
    VITE_API_BASE_URL,
    VITE_BUILD_BASE_URL,
    VITE_BUILD_VERSION,
    VITE_CHARACTER_FBX_URL,
    VITE_DOWNLOAD_URL,
    VITE_DISCORD_URL
  } = config;
  
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