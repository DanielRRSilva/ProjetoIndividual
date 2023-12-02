var perfilModel = require("../models/perfilModel");

function buscarDados(req, res) {
    var idUsuario = req.body.idUsuario
    perfilModel.dadosUsuario(idUsuario)
    .then(function(resultadoBuscarDados){
        perfilModel.maiorPontUsuario(idUsuario).then((respostaPontos)=> {
            res.json({
                nomeUsuario: resultadoBuscarDados[0].nome,
                totalTentativa: resultadoBuscarDados[0].totalTentativas,
                jogoFavorito: resultadoBuscarDados[0].jogoFav,
                orgTorce: resultadoBuscarDados[0].qualOrgTorce,
                pontuacaoMax: respostaPontos[0].maiorPontuacao
            })
        })
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