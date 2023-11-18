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

    if(nomeForm == ""|| idadeForm == "" || generoForm == "" || jogou == "" || qtdJogoForm == "" || jogoFav == "" || cenarioCompetitivo == "" || acompanha == "" || timeUser == "") {
        alert(`Os campos devem ser todos preenchidos!`)
    }else if(nomeForm.length <=2) {
        alert(`Nome inválido`)
    }else if(idadeForm.match(/[a-z|A-Z]+/)) {
        alert(`A idade informada inválida!`)
    }else if(qtdJogoForm.match(/[a-z|A-Z]+/)) {
        alert(`A quantidade de jogos jogados inválida!`)
    }else{
        alert(`td Certo`)
    }
}
