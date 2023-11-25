var database = require("../database/config")

function selecionarQuiz(nomeQuiz) {
    var instrucao = `select * from quiz where nome = "${nomeQuiz}"`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificarTentativa(fkUsuario, fkQuiz) {
    var instrucao = `select numeroTentativa from tentativa where fkUsuario = ${fkUsuario} and fkQuiz = ${fkQuiz} order by numeroTentativa desc limit 1`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function inserirTentativa(fkUsuario, fkQuiz, tentativaAtual) {
 var instrucao = `insert into tentativa(fkUsuario, fkQuiz, numeroTentativa) values (${fkUsuario}, ${fkQuiz}, ${tentativaAtual})`;

 console.log("Executando a instrução SQL: \n" + instrucao);
 return database.executar(instrucao);
}

module.exports = {
    selecionarQuiz,
    verificarTentativa,
    inserirTentativa
}