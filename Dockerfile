# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY index.html .
COPY vite.config.js .
COPY public/ public/
COPY src/ src/
RUN npm ci
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# CMD chmod -R 755 /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT nginx -g 'daemon off;'