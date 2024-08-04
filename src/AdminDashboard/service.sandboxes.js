function createUrl() {
  const apiUrl = localStorage.getItem('apiBaseUrl');
  return `${apiUrl}/sandboxes`;
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

export async function retrieveInstance(sandbox, instance) {
  const url = `${createUrl()}/${sandbox.id}/instances/${instance.id}`;
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

export async function archiveInstance(sandbox, instance) {
  const url = `${createUrl()}/${sandbox.id}/instances/${instance.id}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
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

export async function attemptArchiveInstance(sandbox, instance){
  const confirmArchive = confirm('Are you sure that you want to archive this instance?');
  if(confirmArchive) {
    try {
      return await archiveInstance(sandbox,instance);
    } catch (error) {
      console.error(error);
    }
  }
}