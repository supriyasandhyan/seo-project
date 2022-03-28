FROM node:14.18.0 as build-step

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app


RUN npm run build
 

# Stage 2

FROM nginx:1.17.1-alpine

#!/bin/sh

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-step /app/build /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]