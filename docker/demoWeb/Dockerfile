FROM node:alpine

ADD public /app
ADD src /app
ADD babel.config.js /app
ADD package.json /app

RUN npm install

CMD ["npm","run server"]
