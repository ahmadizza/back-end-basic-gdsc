const myLogger = function (req, res, next) {
    console.log('IP Request', req.socket.remoteAddress)
  
    // if(req.socket.remoteAddress == '::1') {
    //   next(new Error('akses tidak diizinkan'))
    // }
  
    next()
}

module.exports = {myLogger}