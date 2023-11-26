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

router.post("/selecionarTentativa", function(req, res) {
    quizController.selecionarTentativa(req, res)
})

router.post("/inserirPontuacao", function(req, res) {
    quizController.inserirPontuacao(req, res)
})

module.exports = router