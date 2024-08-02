import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';

const { VITE_HOST } = process.env;

const spaRoute = {
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: path.resolve('/app/dist'),
      index: ['index.html'],
    },
  },
};

const configRoute = {
    method: 'GET',
    path: '/mw/config',
    handler: (request, h) => {
        const config = {
            VITE_API_BASE_URL: process.env.VITE_API_BASE_URL,
            VITE_BUILD_BASE_URL: process.env.VITE_BUILD_BASE_URL,
            VITE_BUILD_VERSION: process.env.VITE_BUILD_VERSION,
            VITE_CHARACTER_FBX_URL: process.env.VITE_CHARACTER_FBX_URL,
            VITE_DOWNLOAD_URL: process.env.VITE_DOWNLOAD_URL,
            VITE_DISCORD_URL: process.env.VITE_DISCORD_URL
        };
  
        return h.response(config).code(200);
    },
    options: {
        cors: {
            origin: [ VITE_HOST ]
        }
    }
};

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