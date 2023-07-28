import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppConfigurationClient } from '@azure/app-configuration';

async function createClient() {
  const { VITE_AZURE_CONFIG_URL } = import.meta.env;
  const connectionString = typeof VITE_AZURE_CONFIG_URL !== 'undefined' ? VITE_AZURE_CONFIG_URL : window.AZURE_CONFIG_URL;

  return new AppConfigurationClient(connectionString);
}

async function setLocalSettings() {
  const client = await createClient();
  const settings = client.listConfigurationSettings();
  localStorage.clear();
  for await (const setting of settings) {
      localStorage.setItem(setting.key, setting.value);
  }
}

async function render() {
  await setLocalSettings();

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

render();