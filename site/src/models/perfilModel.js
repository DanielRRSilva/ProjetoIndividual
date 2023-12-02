var database = require("../database/config")

function dadosUsuario(idUsuario) {
    var instrucao = `select nome, count(idTentativa) as totalTentativas, jogoFav, qualOrgTorce from usuario left join tentativa on usuario.idUsuario = tentativa.fkUsuario left join formulario on usuario.idUsuario = formulario.fkUsuario where idUsuario = ${idUsuario}`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function maiorPontUsuario(idUsuario) {
    var instrucao = `select max(pontuacao) as maiorPontuacao from pontuacao where fkUsuario = ${idUsuario}`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    dadosUsuario,
    maiorPontUsuario
}