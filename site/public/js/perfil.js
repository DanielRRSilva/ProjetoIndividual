var idUsuario = sessionStorage.ID_USUARIO
function buscarDados() {
  fetch("/perfil/buscarDados", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idUsuario: idUsuario
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        resposta.json().then(json => {
          console.log(json)
          nomeUser.innerHTML = json[0].nome,
          qtdTentativa.innerHTML = json[0].totalTentativas,
          qtdAcerto.innerHTML = json[0].maiorPontuacao,
          orgTorce.innerHTML = json[0].qualOrgTorce,
          jogoFav.innerHTML = json[0].jogoFav
        })
      } else {
        throw "Houve um erro ao enviar o formulario!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
  return false;
}

buscarDados()