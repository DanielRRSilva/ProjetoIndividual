var database = require("../database/config")

function buscarIdadeMedia() {
    var instrucao = `select avg(idade) as idadeMedia from formulario`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarMediaJogos() {
    var instrucao = `select avg(qtdJogou) as mediaJogos from formulario`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarUsuariosMasculinos() {
    var instrucao = `select count(genero) as usuariosMasculinos from formulario where genero = "masculino"`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarUsuariosFemininos() {
    var instrucao = `select count(genero) as usuariasFemininas from formulario where genero = "feminino"`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarTresTimesFav() {
    var instrucao = `select qualOrgTorce, count(qualOrgTorce) as qtdTorcedores from formulario group by qualOrgTorce order by qtdTorcedores desc limit 3`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarIdadeMedia,
    buscarMediaJogos, 
    buscarUsuariosMasculinos,
    buscarUsuariosFemininos,
    buscarTresTimesFav
}