function enviarForm() {
  var nomeForm = nomeUser.value
  var idadeForm = idadeUser.value
  var generoForm = generoUser.value
  var jogou = jogouUser.value
  var qtdJogoForm = qtdJogos.value
  var jogoFav = jogoFavUser.value
  var cenarioCompetitivo = cenarioComp.value
  var acompanha = acompanhaCenario.value
  var timeUser = timeTorceUser.value
  var idUsuario = sessionStorage.ID_USUARIO
  
  if(idUsuario == undefined) {
    alert(`É necessario fazer login`)
  }else if (nomeForm == "" || idadeForm == "" || generoForm == "" || jogou == "" || qtdJogoForm == "" || jogoFav == "" || cenarioCompetitivo == "" || acompanha == "" || timeUser == "") {
    alert(`Os campos devem ser todos preenchidos!`)
  } else if (nomeForm.length <= 2) {
    alert(`Nome inválido`)
  } else if (idadeForm.match(/[a-z|A-Z]+/)) {
    alert(`A idade informada inválida!`)
  } else if (qtdJogoForm.match(/[a-z|A-Z]+/)) {
    alert(`A quantidade de jogos jogados inválida!`) 
  }else {
    fetch("/formulario/enviarFormulario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
  
        nomeFormulario: nomeForm,
        idadeFormulario: Number(idadeForm),
        generoFormulario: generoForm,
        jogouFormulario: jogou,
        qtdJogoFormulario: Number(qtdJogoForm),
        jogoFavFormulario: jogoFav,
        cenarioCompetitivoFormulario: cenarioCompetitivo,
        acompanhaFormulario: acompanha,
        timeUserFormulario: timeUser,
        idUsuarioFormulario: idUsuario
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);
  
        if (resposta.ok) {
          setTimeout(() => {
            alert(`Formulário enviado!`)
          }, "500")
        } else {
          if(resposta.status == 401) {
            alert(`Um usuário não pode enviar mais de um formulário!`)
          }else {
            throw "Houve um erro ao enviar o formulario!";
          }
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
    return false;
  }
}