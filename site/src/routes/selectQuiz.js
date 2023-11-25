var express = require("express");
var router = express.Router();

var selecQuizController = require("../controllers/selectQuizController")

router.post("/selecionarQuiz", function(req, res) {
    selecQuizController.selecionarQuiz(req, res);
})

router.post("/verificarTentativa", function(req, res) {
    selecQuizController.verificarTentativa(req, res);
})

router.post("/inserirTentativa", function(req, res) {
    selecQuizController.inserirTentativa(req, res);
})

module.exports = router