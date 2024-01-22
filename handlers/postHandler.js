const {Router} = require('express')
var {getRandomInt} = require('../utils/randomNumber.js')

const posts = []

/**
 * @param {Router} router 
 */

function setupPostHandler (Router) {
    router.get('/', (req, res) => {
        console.log(req.params, req.query)
        res.json({
          "data": posts
        })
      })
      
      router.post('/', (req, res) => {
          console.log(req.body)
      
          posts.push({
            "id": getRandomInt(99999999999999999),
            "title": req.body.title,
            "description": req.body.description
          })
          res.json({
            "messege": "succes"
          })
        })
      
        router.put('/', (req, res) => {
          res.send('Got a PUT request at /user')
        })
      
        router.delete('/:postId', (req, res) => {
          console.log(req.params.postId)
      
          for(let i = 0; i < posts.length; i++) {
                              if(posts[i].id == req.params.postId) {
                                  posts[i].title = title
      
                                  res.end(JSON.stringify({
                                      status: true,
                                      message: "berhasil update data"
                                  }))
                                  return 
                              }
                          }
      
                      res.json({
                        "messege": 'post with id ${req.params.postId} is not found'
                      })
                    })

                    return router
      

}

module.exports = {setupPostHandler}