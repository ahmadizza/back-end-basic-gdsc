const {Router} = require('express')
var {getRandomInt} = require('../utils/randomNumber')
const {myLogger} = require('../middleware/logger.js')
const {checkPostData} = require('../middleware/checkPostData.js')

const posts = [];

/**
 * @param {Router} router 
 */

function setupPostHandler () {
    const router = Router();

    router.get('/', myLogger, (req, res) => {
        console.log(req.params, req.query)
        res.json({
          "data": posts
        })
      })
      
      router.post('/', checkPostData, (req, res) => {
          // console.log(req.body)
      
          posts.push({
            "id": getRandomInt(99999999999999999),
            "title": req.body.title,
            "description": req.body.description,
            "created_at": req.requestTime
          })
          res.json({
            "message": "succes"
          })
        })
      
        router.put('/:postId', checkPostData, (req, res) => {
          // res.send('Got a PUT request at /user')
  
          console.log(req.params.postId)
  
          const { title, description } = req.body
  
          for(let i = 0; i < posts.length; i++) {
              if(posts[i].id == req.params.postId) {
                  if(title) {
                      posts[i].title = title
                  }
  
                  if(description) {
                      posts[i].description = description
                  }
  
                  res.end(JSON.stringify({
                      status: true,
                      message: "successfully updated data."
                  }))
                  return
              }
          }
  
          res.json({
              "message": `post with id ${req.params.postId} is not found`
          })
        })
      
        router.delete('/:postId', (req, res) => {
          console.log(req.params.postId)
      
          for(let i = 0; i < posts.length; i++) {
                              if(posts[i].id == req.params.postId) {
                                  posts[i].title = req.body.title;
      
                                  res.end(JSON.stringify({
                                      status: true,
                                      message: "berhasil update data"
                                  }))
                                  return; 
                              }
                          }
      
                      res.json({
                        "messege": `post with id ${req.params.postId} is not found`
                      })
                    })

                    return router
      

}

module.exports = {setupPostHandler}