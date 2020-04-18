FROM node:12.16
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i -q
COPY . .
EXPOSE 5000
CMD [ "npm", "start" ]
