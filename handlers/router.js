const {Router} = require('express')
const {setupPostHandler} = require(./postHandler.js/)
const {setupUserHandler} = require(./postHandler.js/)

/**
 * 
 * @param {*} router 
 */

function setupHandler(router){
    router.use('/post/', setupPostHandler(router))
    router.use('/user/', setupUserHandler(router))
    return router
}

module.exports = {setupHandler}