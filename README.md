Web App
---

Web app and admin for Terra Major.

## Run database locally
First, create a `.env` file in the root of the directory with the following values:

```bash
VITE_TERRA_MAJOR_API_URL=http://localhost:8000
VITE_BUILD_BASE_URL=build
VITE_BUILD_VERSION=0.11.6
```

## Run app in Dev mode locally
To run the app locally,

```bash
docker compose up --build dev
```

This will run the app locally on [http://localhost:5173](http://localhost:5173)

## Run app in Release mode locally 

To build the release:

```bash
docker compose up --build release
```

This will run the ap locally on [http://localhost](http://localhost). 