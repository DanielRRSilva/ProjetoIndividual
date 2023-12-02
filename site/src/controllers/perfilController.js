var perfilModel = require("../models/perfilModel");

function buscarDados(req, res) {
    var idUsuario = req.body.idUsuario
    perfilModel.dadosUsuario(idUsuario)
    .then(function(resultado){
        res.json(resultado)
    }).catch(
        function(erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o envio do formulario! Erro:", erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    buscarDados
}