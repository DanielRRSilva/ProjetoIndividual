var spanIdadeMedia = document.getElementById("idadeMedia")
var spanQtdJogoMedia = document.getElementById("qtdJogoMedia")
var spanUsuariosMasculinos = document.getElementById("usuariosMasculinos")
var spanUsuariasFemininas = document.getElementById("usuariasFemininas")

function buscarDados() {
    fetch("/dashboard/buscarDados", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            console.log(resposta);
            resposta.json().then(json => {
                spanIdadeMedia.innerHTML = (Number(json.mediaIdade)).toFixed(1)
                spanQtdJogoMedia.innerHTML= (Number(json.jogosMedia)).toFixed(0)
                spanUsuariosMasculinos.innerHTML = json.qtdUsuariosMasculinos
                spanUsuariasFemininas.innerHTML = json.qtdUsuariasFemininas
            })
        } else {
            console.log("Houve um erro ao tentar realizar coletar os dados!");
            resposta.text().then(texto => {
                console.error(texto);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}
buscarDados()