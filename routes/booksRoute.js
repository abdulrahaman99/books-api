const { Router } = require("express");
const { route } = require("express/lib/application");
const { getBooks } = require("../controllers/boobsController")



const Router =Router();
router.route("/books").get(getBooks)

Router.route("/books").get(getBooks)

module.exports=Router