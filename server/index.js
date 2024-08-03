import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';
import spaRoute from './routes/spa.js';
import configRoute from './routes/config.js';

function getServerVersion() {
  const packageJsonPath = path.resolve('/app/package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  return packageJson.version;
}

async function init() {
  dotenv.config();

  const { PORT } = process.env;

  const server = Hapi.server({
    port: PORT || 80,
    host: '0.0.0.0',
  });

  await server.register(Inert);

  const routes = [
    configRoute,
    spaRoute,
  ];

  server.route(routes);

  const version = getServerVersion();
  const startMessage = `Terra Major UI v${version} running on ${server.info.uri}`;

  await server.start();
  console.log(startMessage);
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();