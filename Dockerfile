# Build stage
FROM node:22-alpine AS build
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
RUN apk add --update nodejs
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules
COPY server/ /app/server
EXPOSE 80
ENTRYPOINT node /app/server/index.js