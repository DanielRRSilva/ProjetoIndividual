var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController")

router.post("/buscarDados", function(req, res) {
    dashboardController.buscarDados(req, res)
})

router.post("/buscarTimes", function(req, res) {
    dashboardController.buscarTresTimesFav(req, res)
})

module.exports = router