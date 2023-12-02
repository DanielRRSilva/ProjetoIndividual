var database = require("../database/config")

function dadosUsuario(idUsuario) {
    var instrucao = `select idUsuario, nome, count(idTentativa) as totalTentativas, max(pontuacao) as maiorPontuacao, jogoFav, qualOrgTorce from usuario join tentativa on usuario.idUsuario = tentativa.fkUsuario join pontuacao on usuario.idUsuario = pontuacao.fkUsuario join formulario on usuario.idUsuario = formulario.fkUsuario where idUsuario = ${idUsuario}`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    dadosUsuario
}