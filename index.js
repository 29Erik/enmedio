'use strict';

const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const constants = require('./utils/constants');
const oas3Tools = require('oas3-tools');
const serverPort = constants.port;

// swaggerRouter configuration
const options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

const expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
const app = expressAppConfig.getApp();

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, async function () {
    await mongoose.connect(`${constants.mongoUrl}?ssl=true&replicaSet=globaldb`, {
        auth: {
            user: constants.mongoUser,
            password: constants.mongoPassword
        },
        useNewUrlParser: true,
        useUnifiedTopology: true,
        retryWrites: false
    })
        .then(() => console.log('Connection to MongoDB successful'))
        .catch((err) => console.error(err));

    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});
