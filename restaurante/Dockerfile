FROM node:12.16 as build
RUN mkdir /app
WORKDIR /app
COPY package.json .
ARG REACT_APP_HOST_IP_ADDRESS
ARG REACT_APP_HOST_PORT
ENV REACT_APP_HOST_IP_ADDRESS $REACT_APP_HOST_IP_ADDRESS
ENV REACT_APP_HOST_PORT $REACT_APP_HOST_PORT
RUN npm install -q
RUN mkdir /usr/src/uploads
COPY . /app
EXPOSE 3000
CMD [ "npm", "start" ]

# production environment
#FROM nginx:1.16.0-alpine
#COPY --from=build /app/build /usr/share/nginx/html
#RUN rm /etc/nginx/conf.d/default.conf
#COPY nginx/nginx.conf /etc/nginx/conf.d
#EXPOSE 8090
#CMD ["nginx", "-g", "daemon off;"]
