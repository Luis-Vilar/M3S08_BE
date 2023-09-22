// dependencias
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { config } = require("dotenv");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig'); // Path to your Swagger configuration file

const logger = require("./log/index");
const pinoHttp = require("pino-http")({ logger });


config();

// classe server
class Server {
  // atributos
  app = express();

  // getter app
  getApp() {
    return this.app;
  }

  // constructor de classe
  constructor(app = this.app) {
    this.middlewares(app);
    this.routes(app);
    this.database();
    this.initializeServer(app);
  }
  // middlewares
  async middlewares(app) {
    app.use(cors());
    app.use(express.json());
    app.use(morgan('combined', { stream: logger.stream }));
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    // app.use(pinoHttp);

  }
  // connect database
  async database() {
    const connection = require("./database/connection");
    try {
      await connection.authenticate();
      console.log("Conexão com o banco de dados estabelecida com sucesso!");
    } catch (error) {
      console.error("Não foi possível conectar com o banco de dados:", error.message);
    }
  }
  // routes
  async routes(app) {
    const appRoutes = require("./routes");
    app.use(appRoutes);

  }
  // start server
  async initializeServer(app) {
    const PORT = process.env.PORT_NODE || 3000;
    const HOST = process.env.HOST_NODE || "localhost";
    app.listen(PORT, () => console.log(`Servidor executando http://${HOST}:${PORT}`));
  }

}

module.exports = { Server };

