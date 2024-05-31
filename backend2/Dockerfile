# Gunakan multi-stage build untuk frontend dan backend

# Tahap 1: Build frontend
FROM node:16-alpine AS build-frontend

WORKDIR /app/backend2

COPY backend2/package.json backend2/package-lock.json ./
RUN npm install

COPY backend2/ ./
RUN npm run build

# Tahap 2: Build backend
FROM node:16-alpine

WORKDIR /app/server

COPY server/package.json server/package-lock.json ./
RUN npm install

COPY server/ ./

# Copy build hasil dari tahap 1 ke dalam direktori publik backend
COPY --from=build-frontend /app/backend2/build ./public

EXPOSE 5000

# Menjalankan aplikasi backend
CMD ["node", "index.js"]
