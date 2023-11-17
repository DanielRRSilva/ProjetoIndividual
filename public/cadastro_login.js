var bannerLogin = document.getElementById("bannerLogin")
//inpust cadastro login
var inputEmailLogin = document.getElementById("emailLoginUser")
var inputSenhaLogin = document.getElementById("senhaLoginUser")
var inputUserNameCadastro = document.getElementById("userName")
var inputEmailUserCadastro = document.getElementById("emailUser")
var inputSenhaUserCadastro = document.getElementById("senhaUser")
var inputConfirmarSenhaUserCadastro = document.getElementById("confirmarSenhaUser")
//setas para cada input
var setaEmailLogin = document.getElementById("setaEmailLogin")
var setaSenhaLogin = document.getElementById("setaSenhaLogin")
var setaUserNameCadastro = document.getElementById("setaUserNameCadastro")
var setaEmailCadastro = document.getElementById("setaEmailCadastro")
var setaSenhaCadastro = document.getElementById("setaSenhaCadastro")
var setaConfirmaSenhaCadastro = document.getElementById("setaConfirmaSenhaCadastro")

function irBannerCadastro() {
    bannerLogin.style.marginLeft = "-50%"
}

inputEmailLogin.addEventListener("focus",()=> {
    setaEmailLogin.style.opacity = "1"
    setaSenhaLogin.style.opacity = "0"
    setaUserNameCadastro.style.opacity = "0"
    setaEmailCadastro.style.opacity = "0"
    setaSenhaCadastro.style.opacity = "0"
    setaConfirmaSenhaCadastro.style.opacity = "0"
})

inputSenhaLogin.addEventListener("focus",()=> {
    setaEmailLogin.style.opacity = "0"
    setaSenhaLogin.style.opacity = "1"
    setaUserNameCadastro.style.opacity = "0"
    setaEmailCadastro.style.opacity = "0"
    setaSenhaCadastro.style.opacity = "0"
    setaConfirmaSenhaCadastro.style.opacity = "0"
})

inputUserNameCadastro.addEventListener("focus", ()=> {
    setaEmailLogin.style.opacity = "0"
        setaSenhaLogin.style.opacity = "0"
        setaUserNameCadastro.style.opacity = "1"
        setaEmailCadastro.style.opacity = "0"
        setaSenhaCadastro.style.opacity = "0"
        setaConfirmaSenhaCadastro.style.opacity = "0"
})

inputEmailUserCadastro.addEventListener("focus", ()=> {
    setaEmailLogin.style.opacity = "0"
    setaSenhaLogin.style.opacity = "0"
    setaUserNameCadastro.style.opacity = "0"
    setaEmailCadastro.style.opacity = "1"
    setaSenhaCadastro.style.opacity = "0"
    setaConfirmaSenhaCadastro.style.opacity = "0"
})

inputSenhaUserCadastro.addEventListener("focus", ()=> {
    setaEmailLogin.style.opacity = "0"
    setaSenhaLogin.style.opacity = "0"
    setaUserNameCadastro.style.opacity = "0"
    setaEmailCadastro.style.opacity = "0"
    setaSenhaCadastro.style.opacity = "1"
    setaConfirmaSenhaCadastro.style.opacity = "0"
})

inputConfirmarSenhaUserCadastro.addEventListener("focus",()=> {
    setaEmailLogin.style.opacity = "0"
    setaSenhaLogin.style.opacity = "0"
    setaUserNameCadastro.style.opacity = "0"
    setaEmailCadastro.style.opacity = "0"
    setaSenhaCadastro.style.opacity = "0"
    setaConfirmaSenhaCadastro.style.opacity = "1"
})

document.addEventListener("click",(e)=> {
    if(!inputEmailLogin.contains(e.target) && !inputSenhaLogin.contains(e.target) && !inputConfirmarSenhaUserCadastro.contains(e.target) && !inputSenhaUserCadastro.contains(e.target) && !inputEmailUserCadastro.contains(e.target) && !inputUserNameCadastro.contains(e.target)){
        setaEmailLogin.style.opacity = "0"
        setaSenhaLogin.style.opacity = "0"
        setaUserNameCadastro.style.opacity = "0"
        setaEmailCadastro.style.opacity = "0"
        setaSenhaCadastro.style.opacity = "0"
        setaConfirmaSenhaCadastro.style.opacity = "0"
    }
})

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