require('dotenv').config();
require('./database')
const express = require('express');
const server = express();
const { serverPort } = require('./config');
const { errorHandler } = require('./lib/error_handler');
const { logError } = require('./lib/logError');
const { mainRouter } = require('./modules');

server.use(express.json())
server.use(mainRouter);

// middlewares
//server.use(logError);
//server.use(errorHandler);

server.listen(serverPort, () => {
    console.log(`server on port ${serverPort}`);
});