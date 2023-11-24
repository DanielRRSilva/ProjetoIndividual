var database = require("../database/config")

function selecionarQuiz(nomeQuiz) {
    var instrucao = `select * from quiz where nome = "${nomeQuiz}"`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    selecionarQuiz
}