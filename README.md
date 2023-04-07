<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# API CRUD de Produtos com NestJS e Fastify

Esta é uma API simples para gerenciar produtos, utilizando NestJS como framework e Fastify como servidor HTTP. A API suporta as operações básicas de CRUD (Create, Read, Update e Delete).

## Índice

Requisitos

Instalação

Execução

Endpoints

## Requisitos

Node.js v14.x ou superior
npm v6.x ou superior
CLI do NestJS v8.x ou superior

## Instalação

Clone este repositório:

git clone https://github.com/BOThiago/CRUD-NestJS-Fastify

Navegue até o diretório do projeto:

cd products-api

Instale as dependências:

npm install

## Execução

Para iniciar o servidor, execute o seguinte comando:

npm run start

> O servidor estará disponível em http://localhost:3000.

# Endpoints

#### Adicionar produto

- URL: /products

- Método: POST

- Body:

| Campo       | Tipo   | Descrição            |
| ----------- | ------ | -------------------- |
| name        | String | Nome do produto      |
| description | String | Descrição do produto |
| price       | Number | Preço do produto     |

- Resposta bem-sucedida:

> Código: 201 Created
> Conteúdo: { id: "produto_id" }

#### Listar produtos

- URL: /products

- Método: GET

* Resposta bem-sucedida:

> Código: 200 OK
> Conteúdo: [{ id: "produto_id", name: "nome", description: "descrição", price: 99.99 }]

#### Obter produto por ID

- URL: /products/:id

- Método: GET

- URL Params: id=[string]

* Resposta bem-sucedida:

> Código: 200 OK
> Conteúdo: { id: "produto_id", name: "nome", description: "descrição", price: 99.99 }

- Resposta com falha:

> Código: 404 Not Found
> Conteúdo: { message: "Product not found", statusCode: 404 }

#### Atualizar produto

- URL: /products/:id

- Método: PATCH

- URL Params: id=[string]

- Body:

| Campo       | Tipo   | Descrição            |
| ----------- | ------ | -------------------- |
| name        | String | Nome do produto      |
| description | String | Descrição do produto |
| price       | Number | Preço do produto     |

- Resposta bem-sucedida:

> Código: 204 No Content

- Resposta com falha:

Código: 404 Not Found

> Conteúdo: { message: "Product not found", statusCode: 404 }

#### Excluir produto

- URL: /products/:id

- Método: DELETE

- URL Params: id=[string]

* Resposta bem-sucedida:

> Código: 204 No Content

- Resposta com falha:

> Código: 404 Not Found
> Conteúdo: { message: "Product not found", statusCode: 404 }

## Considerações finais

Esta API é um exemplo básico de como criar uma API CRUD usando NestJS e Fastify. Para melhorar esta API, considere adicionar validação, autenticação e integração com um banco de dados.
