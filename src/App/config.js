/**
 * This file manages configuration variables for the app and store them in localStorage. 
 * In dev mode, it retrieves environment variables from Vite variable imported via .env file.
 * In production mode, it retrieves environment variables from the local middleware server.
 */

function isDefined(param) {

  return typeof param !== 'undefined';
}


function getViteVars() {

  return {
    VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
    VITE_BUILD_BASE_URL: import.meta.env.VITE_BUILD_BASE_URL,
    VITE_BUILD_VERSION: import.meta.env.VITE_BUILD_VERSION,
    VITE_CHARACTER_FBX_URL: import.meta.env.VITE_CHARACTER_FBX_URL,
    VITE_DOWNLOAD_URL: import.meta.env.VITE_DOWNLOAD_URL,
    VITE_DISCORD_URL: import.meta.env.VITE_DISCORD_URL
  };
}

async function getNodeVars() {
  const response = await fetch(`/mw/config`);

  return await response.json();
}

async function getVars() {
  if(import.meta.env && import.meta.env.DEV) {
    return getViteVars();
  }

  return await getNodeVars();
}

export async function setLocalStorageConfigs() {
  const {
    VITE_API_BASE_URL,
    VITE_BUILD_BASE_URL,
    VITE_BUILD_VERSION,
    VITE_CHARACTER_FBX_URL,
    VITE_DOWNLOAD_URL,
    VITE_DISCORD_URL
  } = await getVars();
  
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
