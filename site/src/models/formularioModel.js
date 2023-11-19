var database = require("../database/config")

function enviarFormulario(nome, idade, genero, jogou, qtdJogo, jogoFav, competitivo, acompanha, time) {
    var instrucao = `
    insert into formulario (nome, idade, genero, jogou, qtdJogou, jogoFav, cenarioCompetitivo, acompanha, qualOrgTorce, fkUsuario) values ('${nome}', ${idade}, '${genero}', '${jogou}', ${qtdJogo}, '${jogoFav}', '${competitivo}', '${acompanha}', '${time}', 1);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    enviarFormulario
}