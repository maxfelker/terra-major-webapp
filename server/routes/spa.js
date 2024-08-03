import path from 'path';
import Boom from '@hapi/boom';

export default {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: path.resolve('/app/dist'),
        index: ['index.html'],
        redirectToSlash: true
      },
    },
    options: {
      ext: {
        onPreResponse: {
          method(request, h) {

            const isMiddlewareRequest = request.path.toLowerCase().trim().startsWith('/mw');
            const { response } = request;

            // If the response is a 404
            if (response.isBoom && response.output.statusCode === 404) {

                // If the request is for a middleware route, return a 404
                if (isMiddlewareRequest) {
                    return Boom.notFound("Not Found");
                }

                // Serve the index.html file to support deep linking
                const filePath = path.resolve('/app/dist/index.html');
                return h.file(filePath);
            }

            // Continue with the response if inert found it
            return h.continue;
          },
        }
      }
  }
};