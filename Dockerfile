# Base node image
FROM node:bullseye-slim as base

RUN mkdir /app
WORKDIR /app

ADD . .

RUN npm install
RUN npm run build

CMD ["npm", "run", "preview", "--", "--host"]