# DEVELOPMENT
FROM node:14 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# PRODUCTION
FROM node:14 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY --from=development /usr/src/app/ .

EXPOSE 8080

CMD [ "node", "dist/main" ]