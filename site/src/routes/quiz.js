var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController")

router.post("/selecionarQuiz", function(req, res) {
    quizController.selecionarQuiz(req, res);
})

router.post("/verificarTentativa", function(req, res) {
    quizController.verificarTentativa(req, res);
})

router.post("/inserirTentativa", function(req, res) {
    quizController.inserirTentativa(req, res);
})

module.exports = router