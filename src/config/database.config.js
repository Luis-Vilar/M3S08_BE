// const { config } = require("dotenv");
// config();
// module.exports = {
//   dialect: process.env.DIALECT, 
//   host: process.env.HOST, 
//   username: process.env.USERNAMEDB, 
//   password: process.env.PASSWORDDB, 
//   database: process.env.DATABASE, 
//   port: process.env.PORT, 
//   define: {
//     underscored: true, //Traduz os campos para snake_case
//     underscoredAll: true, //Traduz todos os campos para snake_case
//   },
// };
const { config } = require("dotenv");
config();
var parse = require('pg-connection-string').parse;
var configdatabase = parse(process.env.HOST);
module.exports = {
  dialect: "postgres", //Qual banco de dados está utilizando;
  host: configdatabase.host, //Qual servidor está utilizando;
  username: configdatabase.user, //Qual o nome do seu usuário no postgres;
  password: configdatabase.password, //Qual a senha do seu usuário no postgres;
  database: configdatabase.database, //Qual o nome do seu database no postgres;
  port: configdatabase.port, //Qual porta do seu postgres (Normalmente é a 5432);
  define: {
    underscored: true,
    underscoredAll: true,
    freezeTableName: true,
  },
};