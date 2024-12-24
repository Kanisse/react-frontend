FROM node:16 AS build

WORKDIR /app
COPY . /app
RUN npm install && npm install --save-dev web-vitals

COPY . /app
EXPOSE 3000

CMD [ "npm" , "start" ]
