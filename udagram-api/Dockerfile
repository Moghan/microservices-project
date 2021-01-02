FROM node:12 AS builder

WORKDIR /app
COPY . .

RUN npm ci && npm run tsc

CMD ["node", "www/server.js"]