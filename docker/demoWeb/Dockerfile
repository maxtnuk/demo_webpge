FROM node:alpine

ADD public /app
ADD src /app
ADD babel.config.js /app
ADD package.js /app

RUN npm install

CMD ["npm","run server"]
