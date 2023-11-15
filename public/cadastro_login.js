var bannerLogin = document.getElementById("bannerLogin")
var inputEmailLogin = document.getElementById("emailLoginUser")
var inputSenhaLogin = document.getElementById("senhaLoginUser")

function irBannerCadastro() {
    bannerLogin.style.marginLeft = "-50%"
}

function cadastrar() {

    var user = userName.value
    var email = emailUser.value
    var senha = senhaUser.value
    var confirmarSenha = confirmarSenhaUser.value

    if(user == "" && email == "" && senha == "" && confirmarSenha == "") {
        alert(`Nenhum campo preenchido!!!`)
    }else if(user == "") {
        alert(`O campo do User Name é obrigatório!`)
    }else if(user.match(/[0-9]/ig) || user.length < 3) {
        alert(`Caracteres Inválidos no User Name!`)
    }else if(email == "") {
        alert(`O campo do E-mail é obrigatório!`)
    }else if(email.indexOf("@") < 0 || email.indexOf(".") < 0 ) {
        alert(`E-mail inválido!!`)
    }else if(senha == "") {
        alert(`O campo senha é obrigatório!`)
    }else if(senha.length < 8) {
        alert(`A senha precisa ter 8 ou mais caracteres!`)
    }else if(confirmarSenha == "") {
        alert(`O campo confirmar senha é obrigatório!`)
    }else if (confirmarSenha != senha) {
        alert(`A confirmação da senha não está igual!`)
    }else {
        bannerLogin.style.marginLeft = "0"
    }
}