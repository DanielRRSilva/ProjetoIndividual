var express = require("express");
var router = express.Router();

var formularioController = require("../controllers/formularioController");

router.post("/enviarFormulario", function(req, res){
    formularioController.enviarFormulario(req, res);
})
module.exports = router;