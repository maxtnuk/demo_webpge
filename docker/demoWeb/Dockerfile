FROM nikolaik/python-nodejs

ADD public /app
ADD src /app
ADD babel.config.js /app
ADD package.json /app

WORKDIR /app

RUN npm install

CMD ["npm","run","server"]
