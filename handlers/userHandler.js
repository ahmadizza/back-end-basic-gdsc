const {Router} = require('express')
const user = [
   {
    'name': 'ucup',
    'age': 20
   } 
]
/**
 * 
 * @param {Router} router 
 */

function setupUserHandler(router){
    
    router.get('/user', (req, res) => {
        console.log("ini get user")
        res.json({
          "data": users
        })
      })

      return router
}

module.exports = {setupUserHandler}