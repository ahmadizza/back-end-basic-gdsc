const express = require('express');
const { Router } = require('express');
const { setupPostHandler } = require('./postHandler.js');
const { setupUserHandler } = require('./userHandler.js');

function setupHandler(app) {
    const userHandlerRouter = express.Router(); // <-- Define userHandlerRouter here
    const postHandlerRouter = express.Router();
    
    app.use('/user', setupUserHandler(userHandlerRouter));
    app.use('/post', setupPostHandler(postHandlerRouter));
}

module.exports = {setupHandler};
