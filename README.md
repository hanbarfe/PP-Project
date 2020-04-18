# PP-Project
Project for a discipline called Práticas de Programação on University UNIFACISA. Project using React and NodeJS(Express) with SocketIo and MongoDB.

## Requirements

* Node
* Docker

## Installation with Docker-compose

* `git clone https://github.com/hanbarfe/Si2-Project.git`
* `docker-compose build`
* `docker-compose up -d`

## Installation without Docker-compose

* `git clone https://github.com/hanbarfe/Si2-Project.git`
* `cd restaurante-back`
* `npm install`
* `cd restaurante`
* `npm install`

## Running Applications in Development mode

* `cd restaurante-back`
* `npm run dev`
* `cd restaurante`
* `npm start`

## Endpoints

* POST/GET `http://url:port/api/v1/products` -> Receives or create a product
* GET `http://url:port/api/v1/products/ID` -> Receives a product
* GET `http://url:port/api/v1/orders`   -> Receives all orders
* GET `http://url:port/api/v1/kitchen`  -> Refresh the status of all orders