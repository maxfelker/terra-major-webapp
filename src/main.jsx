import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { setLocalStorageConfigs } from './App/config';

async function render() {
  await setLocalStorageConfigs();

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

render();