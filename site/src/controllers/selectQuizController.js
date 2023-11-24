var selectQuizModel = require("../models/selectQuizModel")

function selecionarQuiz(req, res) {
    var nomeQuiz = req.body.nomeQuiz

    if(nomeQuiz == undefined) {
        res.status(400).send("O nome do quiz está undefined!")
    }else {
        selectQuizModel.selecionarQuiz(nomeQuiz)
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

module.exports = {
    selecionarQuiz
}