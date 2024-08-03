
const { VITE_HOST } = process.env;

export default {
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