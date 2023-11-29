var spanIdadeMedia = document.getElementById("idadeMedia")
var spanQtdJogoMedia = document.getElementById("qtdJogoMedia")
var spanUsuariosMasculinos = document.getElementById("usuariosMasculinos")
var spanUsuariasFemininas = document.getElementById("usuariasFemininas")
var label = []
var data = []

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

function buscarTimes() {
    fetch("/dashboard/buscarTimes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            
        })
    }).then(function (res) {
        if (res.ok) {
            res.json().then(json => {
                console.log(json);
                for(i = 0; i < json.length; i++) {
                    label.push(json[i].qualOrgTorce)
                    data.push(json[i].qtdTorcedores)
                }
                setTimeout(()=> {
                    plotarGrafico()
                },10)
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
buscarTimes()

function plotarGrafico() {
    const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: label,
      datasets: [{
        label: '# of Votes',
        data: data,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}