import path from 'path';

export default {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: path.resolve('/app/dist'),
        index: ['index.html'],
      },
    },
};