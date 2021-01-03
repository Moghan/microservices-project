FROM beevelop/ionic AS builder

WORKDIR /app
COPY . .
RUN npm ci && ionic build

FROM nginx:alpine
# Set working directory to nginx asset directory
COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*

COPY --from=builder /app/www .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]