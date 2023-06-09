function createUrl() {
  const apiURL = import.meta.env.VITE_TERRA_MAJOR_API_URL;
  return `${apiURL}/sandboxes`;
}

export async function getSandboxes() {
  const url = createUrl();
  const response = await fetch(url);

  return await response.json();
}

export async function getInstancesBySandboxId(sandbox) {
  const url = `${createUrl()}/${sandbox.id}/instances`;
  const response = await fetch(url);

  return await response.json();
}

export async function createInstance(sandbox, instance) {
  const url = `${createUrl()}/${sandbox.id}/instances`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(instance),
  });

  return await response.json();
}

export async function retrieveSandbox(sandbox) {
  const url = `${createUrl()}/${sandbox.id}`;
  const response = await fetch(url);

  return await response.json();
}

export async function updateInstance(sandbox, instance) {
  const url = `${createUrl()}/${sandbox.id}/instances/${instance.id}`;
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(instance),
  });
  return await response.json();
}

export async function archiveSandbox(sandbox) {
  const url = `${createUrl()}/${sandbox.id}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return await response.json();
}
