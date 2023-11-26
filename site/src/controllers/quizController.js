var quizModel = require("../models/quizModel")

function selecionarQuiz(req, res) {
    var nomeQuiz = req.body.nomeQuiz

    if(nomeQuiz == undefined) {
        res.status(400).send("O nome do quiz está undefined!")
    }else {
        quizModel.selecionarQuiz(nomeQuiz)
        .then(function(resultadoQuiz){
            console.log(`\nResultados encontrados: ${resultadoQuiz.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoQuiz)}`);
            if(resultadoQuiz.length == 1){
                console.log(resultadoQuiz)
                res.json({
                    id: resultadoQuiz[0].idQuiz,
                    nomeQuiz: resultadoQuiz[0].nome
                })
            }
            
        })
        .catch(function(erro){
            console.log(erro)
            console.log(
                "\nHouve um erro ao realizar o consulta do quiz! Erro:", erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        })
    }
}


function verificarTentativa(req, res) {
    var fkUsuario = req.body.fkUsuario
    var fkQuiz = req.body.fkQuiz

    if(fkUsuario == undefined) {
        res.status(400).send("O fkUsuario está undefined!")
    }else if(fkQuiz == undefined) {
        res.status(400).send("O fkQuiz está undefined!")
    }else {
        quizModel.verificarTentativa(fkUsuario, fkQuiz)
        .then(function(resultadoVerificar) {
            console.log(`\nResultados encontrados: ${resultadoVerificar.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoVerificar)}`);
            if(resultadoVerificar.length == 0) {
                console.log(resultadoVerificar)
                res.json({
                    idTentativa: 1,
                    tentativa: 0
                })
            }else {
                console.log(resultadoVerificar)
                res.json({
                    idTentativa: resultadoVerificar[0].idTentativa,
                    tentativa: resultadoVerificar[0].numeroTentativa
                })
            }
        })
    }
}

function inserirTentativa(req, res) {
    var fkUsuario = req.body.fkUsuario
    var fkQuiz = req.body.fkQuiz
    var tentativaAtual = req.body.tentativaAtual

    if(fkUsuario == undefined) {
        res.status(400).send("O fkUsuario está undefined!")
    }else if(fkQuiz == undefined) {
        res.status(400).send("O fkQuiz está undefined!")
    }else if(tentativaAtual == undefined) {
        res.status(400).send("A tentativa está undefined!")
    }else {
        quizModel.inserirTentativa(fkUsuario, fkQuiz, tentativaAtual)
        .then(
            function (resultadoInserir) {
                res.json(resultadoInserir);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao inserir a tentativa! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

    }
}

function selecionarTentativa(req, res) {
    var fkUsuario = req.body.fkUsuario
    var fkQuiz = req.body.fkQuiz

    if(fkUsuario == undefined) {
        res.status(400).send("O fkUsuario está undefined!")
    }else if(fkQuiz == undefined) {
        res.status(400).send("O fkQuiz está undefined!")
    }else {
        quizModel.selecionarTentativa(fkUsuario, fkQuiz)
        .then(
            function(resultadoSelecionar) {
                console.log(resultadoSelecionar)
                res.json({
                    fkTentativa: resultadoSelecionar[0].idTentativa
                })
            }
        ).catch(
            function(erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao selecionar a tentativa! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
    }
}

function inserirPontuacao(req, res) {
    var fkUsuario = req.body.fkUsuario
    var fkQuiz = req.body.fkQuiz
    var fkTentativa = req.body.fkTentativa
    var pontuacao = req.body.pontuacao

    if(fkUsuario == undefined) {
        res.status(400).send("O fkUsuario está undefined!")
    }else if(fkQuiz == undefined) {
        res.status(400).send("O fkQuiz está undefined!")
    }else if(fkTentativa == undefined) {
        res.status(400).send("O fkTentativa está undefined!")
    }else if(pontuacao == undefined){
        res.status(400).send("A pontuação está undefined!")
    }else {
        quizModel.inserirPontuacao(fkTentativa, fkUsuario, fkQuiz, pontuacao)
        .then(
            function(resultadoInserirPontuacao) {
                console.log(resultadoInserirPontuacao)
                res.json(resultadoInserirPontuacao)
            }
        ).catch(
            function(erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao inserir a pontuação! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
    }
}

module.exports = {
    selecionarQuiz,
    verificarTentativa,
    inserirTentativa,
    selecionarTentativa,
    inserirPontuacao
}