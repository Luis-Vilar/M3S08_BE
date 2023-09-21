const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Solar Energy API',
      version: '1.0.0',
      description: 'API documentation for your project',
    }, "components": {
      "securitySchemes": {
        "Authentication": {
          "type": "http",
          "scheme": "basic",
          'bearerFormat': "JWT",
        },
      },
    },
    "paths": {
      "/api/v1/geracao": {
        "get": {
          "summary": "Get all Geracao",
          "responses": {
            "200": {
              "description": "Successful response"
            }
          }
        },
        "post": {
          "summary": "Create Geracao",
          "responses": {
            "200": {
              "description": "Successful response"
            }
          }
        }
      },
      "/api/v1/geracao/{unidadeId}": {
        "get": {
          "summary": "Get Geracao by Unidade ID",
          "parameters": [
            {
              "name": "unidadeId",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "Successful response"
            }
          }
        },
        "put": {
          "summary": "Update Geracao",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "Successful response"
            }
          }
        },
        "delete": {
          "summary": "Delete Geracao",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "Successful response"
            }
          }
        }
      },
      "/api/v1/unidades": {
        "get": {
          "summary": "Get all Unidades",
          "responses": {
            "200": {
              "description": "Successful response"
            }
          }
        },
        "post": {
          "summary": "Create Unidade",
          "responses": {
            "200": {
              "description": "Successful response"
            }
          }
        }
      },
      "/api/v1/unidades/{id}": {
        "put": {
          "summary": "Update Unidade",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "Successful response"
            }
          }
        },
        "delete": {
          "summary": "Delete Unidade",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "Successful response"
            }
          }
        }
      },
      "/api/v1/login": {
        "post": {
          "summary": "Login",
          "responses": {
            "200": {
              "description": "Successful response"
            }
          }
        }
      },
      "/api/v1/usuario": {
        "get": {
          "summary": "Get all Users",
          "responses": {
            "200": {
              "description": "Successful response"
            }
          }
        },
        "post": {
          "summary": "Create User",
          "responses": {
            "200": {
              "description": "Successful response"
            }
          }
        }
      },
      "/api/v1/usuario/{id}": {
        "put": {
          "summary": "Update User",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "Successful response"
            }
          }
        },
        "delete": {
          "summary": "Delete User",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "Successful response"
            }
          }
        }
      }
    }
    ,
  },
  apis: ['./routes/*.js'], // Path para as rotas da API
};
const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;

// Path: src/swaggerConfig.js