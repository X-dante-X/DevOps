FROM oven/bun:latest AS build
WORKDIR /app
COPY . .
RUN bun install
RUN bun run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
