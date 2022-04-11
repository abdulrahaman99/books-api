function auth(req, res, next) {
    let isVerifiled = true;
    if (isVerifiled) {
        console.log("logged in successfully")
        next()

    }else{
        console.log("Not authorized");
        throw Error;
    }
}

module.exports = auth