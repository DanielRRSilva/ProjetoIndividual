var alerta = document.getElementById("alerta")
var mensagem = document.getElementById("mensagem")

function enviarForm() {
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
    mensagem.innerHTML = `É necessário fazer login`
    alerta.style.display = "flex"
  }else if (idadeForm == "" || generoForm == "" || jogou == "" || qtdJogoForm == "" || jogoFav == "" || cenarioCompetitivo == "" || acompanha == "" || timeUser == "") {
    mensagem.innerHTML = `Os campos devem ser todos preenchidos!`
    alerta.style.display = "flex"
  } else if (idadeForm.match(/[a-z|A-Z]+/)) {
    mensagem.innerHTML = `A idade informada inválida!`
    alerta.style.display = "flex"
  } else if (qtdJogoForm.match(/[a-z|A-Z]+/)) {
    mensagem.innerHTML = `A quantidade de jogos jogados é inválida!`
    alerta.style.display = "flex" 
  }else {
    fetch("/formulario/enviarFormulario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
  
        idadeFormulario: idadeForm,
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
            mensagem.innerHTML = `Formulário enviado!`
            alerta.style.display = "flex"
          }, "500")
        } else {
          if(resposta.status == 401) {
            mensagem.innerHTML = `Um usuário não pode enviar mais de um formulário!`
            alerta.style.display = "flex"
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
  setTimeout(()=> {
    alerta.style.display = "none"
  },3000)
}