var dashboardModel = require("../models/dashboardModel")

function buscarDados(req, res) {
    dashboardModel.buscarIdadeMedia().then((respostaIdade)=> {
        dashboardModel.buscarMediaJogos().then((respostaJogos)=> {
            dashboardModel.buscarUsuariosMasculinos().then((respostaMasculino)=> {
                dashboardModel.buscarUsuariosFemininos().then((respostaFeminino)=> {
                    console.log(respostaIdade)
                    console.log(respostaJogos)
                    console.log(respostaMasculino)
                    console.log(respostaFeminino)
                    res.json({
                        mediaIdade: respostaIdade[0].idadeMedia,
                        jogosMedia: respostaJogos[0].mediaJogos,
                        qtdUsuariosMasculinos: respostaMasculino[0].usuariosMasculinos,
                        qtdUsuariasFemininas:respostaFeminino[0].usuariasFemininas
                    })
                }).catch(
                    function (erro) {
                        console.log(erro);
                        console.log("\nHouve um erro ao buscar as usuarias femininas! Erro: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    }
                );
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao buscar os usuarios masculinos! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao buscar os jogos! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao buscar a idade! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    buscarDados
}