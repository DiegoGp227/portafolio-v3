# ---------- Build stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar pnpm
RUN npm install -g pnpm

# Instalar dependencias
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copiar proyecto
COPY . .

# Build de Astro
RUN pnpm build

# ---------- Production stage ----------
FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm

# Solo copiamos lo necesario
COPY --from=builder /app ./

# Puerto de Astro preview
EXPOSE 4321

# Ejecutar en modo producción
CMD ["pnpm", "dev", "--host", "0.0.0.0", "--port", "4321"]