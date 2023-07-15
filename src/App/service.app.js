export function setActiveCharacter(characterId) {
  sessionStorage.setItem('characterId', characterId);
}

export function getActiveCharacter() {
  sessionStorage.getItem('characterId');
}

export function setActiveSandbox(sandboxId) {
  sessionStorage.setItem('sandboxId', sandboxId);
}

export function getActiveSandbox() {
  sessionStorage.getItem('sandboxId');
}

export function setActiveAccount(accountId) {
  sessionStorage.setItem('accountId', accountId);
}

export function getActiveAccount() {
  sessionStorage.getItem('accountId');
}

export function clearSession() {
  sessionStorage.clear();
}