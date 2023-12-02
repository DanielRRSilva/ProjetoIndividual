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
          if(json.pontuacaoMax == null) {
            nomeUser.innerHTML = json.nomeUsuario,
            qtdTentativa.innerHTML = json.totalTentativa,
            qtdAcerto.innerHTML = 0,
            orgTorce.innerHTML = json.orgTorce,
            jogoFav.innerHTML = json.jogoFavorito
          }else {
            nomeUser.innerHTML = json.nomeUsuario,
            qtdTentativa.innerHTML = json.totalTentativa,
            qtdAcerto.innerHTML = json.pontuacaoMax,
            orgTorce.innerHTML = json.orgTorce,
            jogoFav.innerHTML = json.jogoFavorito
          }
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