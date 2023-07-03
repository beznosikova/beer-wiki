FROM node:20-alpine as node-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . /app

FROM node-stage as develop

EXPOSE 80

CMD ["npm", "run", "dev"]

FROM node-stage as build

RUN npm run build

FROM ubuntu as production

RUN apt-get update
RUN apt-get install nginx -y

COPY --from=build /app/dist /var/www/html/

EXPOSE 80

CMD ["nginx","-g","daemon off;"]


