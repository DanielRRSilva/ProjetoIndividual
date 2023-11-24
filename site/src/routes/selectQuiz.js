var express = require("express");
var router = express.Router();

var selecQuizController = require("../controllers/selectQuizController")

router.post("/selecionarQuiz", function(req, res) {
    selecQuizController.selecionarQuiz(req, res);
})
module.exports = router