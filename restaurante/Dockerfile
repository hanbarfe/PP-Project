FROM node:12.16-alpine as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
COPY . /app
ARG REACT_APP_HOST_IP_ADDRESS
ARG REACT_APP_HOST_PORT
ENV REACT_APP_HOST_IP_ADDRESS $REACT_APP_HOST_IP_ADDRESS
ENV REACT_APP_HOST_PORT $REACT_APP_HOST_PORT
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 8090
CMD ["nginx", "-g", "daemon off;"]
