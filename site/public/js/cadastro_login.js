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

inputEmailLogin.addEventListener("focus", () => {
    setaEmailLogin.style.opacity = "1"
    setaSenhaLogin.style.opacity = "0"
    setaUserNameCadastro.style.opacity = "0"
    setaEmailCadastro.style.opacity = "0"
    setaSenhaCadastro.style.opacity = "0"
    setaConfirmaSenhaCadastro.style.opacity = "0"
})

inputSenhaLogin.addEventListener("focus", () => {
    setaEmailLogin.style.opacity = "0"
    setaSenhaLogin.style.opacity = "1"
    setaUserNameCadastro.style.opacity = "0"
    setaEmailCadastro.style.opacity = "0"
    setaSenhaCadastro.style.opacity = "0"
    setaConfirmaSenhaCadastro.style.opacity = "0"
})

inputUserNameCadastro.addEventListener("focus", () => {
    setaEmailLogin.style.opacity = "0"
    setaSenhaLogin.style.opacity = "0"
    setaUserNameCadastro.style.opacity = "1"
    setaEmailCadastro.style.opacity = "0"
    setaSenhaCadastro.style.opacity = "0"
    setaConfirmaSenhaCadastro.style.opacity = "0"
})

inputEmailUserCadastro.addEventListener("focus", () => {
    setaEmailLogin.style.opacity = "0"
    setaSenhaLogin.style.opacity = "0"
    setaUserNameCadastro.style.opacity = "0"
    setaEmailCadastro.style.opacity = "1"
    setaSenhaCadastro.style.opacity = "0"
    setaConfirmaSenhaCadastro.style.opacity = "0"
})

inputSenhaUserCadastro.addEventListener("focus", () => {
    setaEmailLogin.style.opacity = "0"
    setaSenhaLogin.style.opacity = "0"
    setaUserNameCadastro.style.opacity = "0"
    setaEmailCadastro.style.opacity = "0"
    setaSenhaCadastro.style.opacity = "1"
    setaConfirmaSenhaCadastro.style.opacity = "0"
})

inputConfirmarSenhaUserCadastro.addEventListener("focus", () => {
    setaEmailLogin.style.opacity = "0"
    setaSenhaLogin.style.opacity = "0"
    setaUserNameCadastro.style.opacity = "0"
    setaEmailCadastro.style.opacity = "0"
    setaSenhaCadastro.style.opacity = "0"
    setaConfirmaSenhaCadastro.style.opacity = "1"
})

document.addEventListener("click", (e) => {
    if (!inputEmailLogin.contains(e.target) && !inputSenhaLogin.contains(e.target) && !inputConfirmarSenhaUserCadastro.contains(e.target) && !inputSenhaUserCadastro.contains(e.target) && !inputEmailUserCadastro.contains(e.target) && !inputUserNameCadastro.contains(e.target)) {
        setaEmailLogin.style.opacity = "0"
        setaSenhaLogin.style.opacity = "0"
        setaUserNameCadastro.style.opacity = "0"
        setaEmailCadastro.style.opacity = "0"
        setaSenhaCadastro.style.opacity = "0"
        setaConfirmaSenhaCadastro.style.opacity = "0"
    }
})

function cadastrar() {

    var userVar = userName.value
    var emailVar = emailUser.value
    var senhaVar = senhaUser.value
    var confirmarSenha = confirmarSenhaUser.value

    if (userVar == "" && emailVar == "" && senhaVar == "" && confirmarSenha == "") {
        alert(`Nenhum campo preenchido!!!`)
        return false
    } else if (userVar == "") {
        alert(`O campo do User Name é obrigatório!`)
        return false;
    } else if (userVar.match(/[0-9]/ig) || userVar.length < 3) {
        alert(`Caracteres Inválidos no User Name!`)
        return false;
    } else if (emailVar == "") {
        alert(`O campo do E-mail é obrigatório!`)
        return false;
    } else if (emailVar.indexOf("@") < 0 || emailVar.indexOf(".") < 0) {
        alert(`E-mail inválido!!`)
        return false;
    } else if (senhaVar == "") {
        alert(`O campo senha é obrigatório!`)
        return false;
    } else if (senhaVar.length < 8) {
        alert(`A senha precisa ter 8 ou mais caracteres!`)
        return false;
    } else if (confirmarSenha == "") {
        alert(`O campo confirmar senha é obrigatório!`)
        return false;
    } else if (confirmarSenha != senhaVar) {
        alert(`A confirmação da senha não está igual!`)
        return false;
    } else {
        alert(`Td certo`)
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                userServer: userVar,
                emailServer: emailVar,
                senhaServer: senhaVar
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);
    
                if (resposta.ok) {
                    setTimeout(() => {
                        bannerLogin.style.marginLeft = "0"
                        sessionStorage.clear()
                    }, "500")
                } else {
                    if (resposta.status == 401) {
                        alert(`O email cadastrado já existe!`)
                    } else {
                        throw "Houve um erro ao tentar realizar o cadastro!";
                    }
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
        return false;
    }
}

function logar() {
    var emailVar = emailLoginUser.value
    var senhaVar = senhaLoginUser.value

    if (emailVar == "" || senhaVar == "") {
        alert(`Os campos estão em branco!`)
    }else {
        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")
    
            if (resposta.ok) {
                console.log(resposta);
    
                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.ID_USUARIO = json.idUsuario;
                    setTimeout(function () {
                        window.location = "./index.html";
                    }, 500); // apenas para exibir o loading
                });
            } else {
                console.log("Houve um erro ao tentar realizar o login!");
                resposta.text().then(texto => {
                    console.error(texto);
                });
            }
        }).catch(function (erro) {
            console.log(erro);
        })
        return false;
    }
}