import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import path from 'path';
import dotenv from 'dotenv';

const spaRoute = {
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: path.resolve('dist'),
      index: ['index.html'],
    },
  },
};

const configRoute = {
    method: 'GET',
    path: '/config',
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
    }
};

async function init() {
  dotenv.config();

  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await server.register(Inert);

  const routes = [
    configRoute,
    spaRoute,
  ];

  server.route(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();