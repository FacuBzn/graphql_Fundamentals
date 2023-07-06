FROM node:18.16.1-alpine

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 4000

CMD [ "npm","run","start" ]
