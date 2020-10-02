# Stage 1 -> Build code
FROM node:12-alpine as builder
WORKDIR /website
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2 -> Production
FROM nginx:1.15-alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /website/public ./
