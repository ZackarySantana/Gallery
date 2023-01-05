# Base node image
FROM node:bullseye-slim as base

RUN mkdir /app
WORKDIR /app

# Create deps image that is just the dependancies installed
FROM base as deps

ADD package.json package-lock.json ./
RUN npm install

FROM deps
ENV NODE_ENV=production

ADD . .

RUN npm install
RUN npm run build

CMD ["npm", "run", "preview", "--", "--host"]