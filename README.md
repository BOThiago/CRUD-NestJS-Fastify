<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Product CRUD API with NestJS and Fastify

This is a simple API to manage products, using NestJS as the framework and Fastify as the HTTP server. The API supports basic CRUD (Create, Read, Update, and Delete) operations.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Execution](#execution)
- [Endpoints](#endpoints)

## Requirements

- Node.js v14.x or higher
- npm v6.x or higher
- NestJS CLI v8.x or higher

## Installation

1. Clone this repository:

> git clone https://github.com/BOThiago/CRUD-NestJS-Fastify

2. Navigate to the project directory:

> cd products-api

3. Install dependencies:

> npm install


## Execution

To start the server, run the following command:

> npm run start

> The server will be available at http://localhost:3000.

## Endpoints

### Add Product

- URL: /products
- Method: POST
- Body:

  | Field       | Type   | Description          |
  | ----------- | ------ | -------------------- |
  | name        | String | Name of the product   |
  | description | String | Description of product|
  | price       | Number | Price of the product  |

- Successful Response:

> Code: 201 Created
> Content: { id: "product_id" }

### List Products

- URL: /products
- Method: GET
- Successful Response:

> Code: 200 OK
> Content: [{ id: "product_id", name: "name", description: "description", price: 99.99 }]


### Get Product by ID

- URL: /products/:id
- Method: GET
- URL Params: id=[string]

- Successful Response:

> Code: 200 OK
> Content: { id: "product_id", name: "name", description: "description", price: 99.99 }

- Failed Response:

> Code: 404 Not Found
> Content: { message: "Product not found", statusCode: 404 }

### Update Product

- URL: /products/:id
- Method: PATCH
- URL Params: id=[string]
- Body:

| Field       | Type   | Description          |
| ----------- | ------ | -------------------- |
| name        | String | Name of the product   |
| description | String | Description of product|
| price       | Number | Price of the product  |

- Successful Response:

> Code: 204 No Content

- Failed Response:

> Code: 404 Not Found
> Content: { message: "Product not found", statusCode: 404 }


### Delete Product

- URL: /products/:id
- Method: DELETE
- URL Params: id=[string]

- Successful Response:

> Code: 204 No Content

- Failed Response:

> Code: 404 Not Found
> Content: { message: "Product not found", statusCode: 404 }

## Conclusion

This API is a basic example of how to create a CRUD API using NestJS and Fastify. To improve this API, consider adding validation, authentication, and integration with a database.
