//requere o objeto Server
const {Server} = require("./server");
//instancia o objeto Server
const app = new Server();

//exporta o objeto app
module.exports = app;