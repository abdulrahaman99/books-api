function logger(req, res, next){
    console.log('${req.method} ${req, originalurl} ${res.stauscode}')
    next();
}
module.exports = logger