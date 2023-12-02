var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.post("/buscarDados", function(req, res){
    perfilController.buscarDados(req, res);
})

module.exports = router