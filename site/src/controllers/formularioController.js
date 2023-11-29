var formularioModel = require("../models/formularioModel")

function enviarFormulario(req, res) {
    var idade = req.body.idadeFormulario;
    var genero = req.body.generoFormulario;
    var jogou = req.body.jogouFormulario;
    var qtdJogo = req.body.qtdJogoFormulario;
    var jogoFav = req.body.jogoFavFormulario;
    var competitivo = req.body.cenarioCompetitivoFormulario;
    var acompanha = req.body.acompanhaFormulario;
    var time = req.body.timeUserFormulario;
    var idUsuario = req.body.idUsuarioFormulario;

   if(idade == undefined) {
        res.status(400).send("Sua idade está undefined!");
    }else if( genero == undefined) {
        res.status(400).send("Seu genero está undefined!");
    }else if(jogou == undefined) {
        res.status(400).send("Seu campo jogou está undefined!");
    }else if(qtdJogo == undefined) {
        res.status(400).send("Sua quantidade de jogos está undefined!");
    }else if(jogoFav == undefined) {
        res.status(400).send("Seu jogo favorito está undefined!");
    }else if(competitivo == undefined) {
        res.status(400).send("Seu campo de cenario competitivo está undefined!");
    }else if(acompanha == undefined) {
        res.status(400).send("Seu campo se acompanha está undefined!");
    }else if(time == undefined) {
        res.status(400).send("O time para que torce está undefined!");
    }else {
        formularioModel.enviarFormulario(idade, genero, jogou, qtdJogo, jogoFav, competitivo, acompanha, time, idUsuario)
            .then(
                function(resultado) {
                    res.json(resultado)
                }
            ).catch(
                function(erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o envio do formulario! Erro:", erro.sqlMessage
                    );
                    if(erro.sqlMessage == `Duplicate entry '${idUsuario}' for key 'formulario.fkUsuario'`) {
                        res.status(401).json(erro.sqlMessage);
                    }else{
                        res.status(500).json(erro.sqlMessage);
                    }
                }
            );
    }
}

module.exports = {
    enviarFormulario
}