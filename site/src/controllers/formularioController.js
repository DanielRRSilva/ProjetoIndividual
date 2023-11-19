var formularioModel = require("../models/formularioModel")

function enviarFormulario(req, res) {
    var nome = req.body.nomeFormulario;
    var idade = req.body.idadeFormulario;
    var genero = req.body.generoFormulario;
    var jogou = req.body.jogouFormulario;
    var qtdJogo = req.body.qtdJogoFormulario;
    var jogoFav = req.body.jogoFavFormulario;
    var competitivo = req.body.cenarioCompetitivoFormulario;
    var acompanha = req.body.acompanhaFormulario;
    var time = req.body.timeUserFormulario;

    if(nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }else if(idade == undefined) {
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
        formularioModel.enviarFormulario(nome, idade, genero, jogou, qtdJogo, jogoFav, competitivo, acompanha, time)
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
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    enviarFormulario
}