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
var alerta = document.getElementById("alerta")
var mensagem = document.getElementById("mensagem")

function irBannerCadastro() {
    bannerLogin.style.marginLeft = "-50%"
}

function cadastrar() {

    var userVar = userName.value
    var emailVar = emailUser.value
    var senhaVar = senhaUser.value
    var confirmarSenha = confirmarSenhaUser.value

    if (userVar == "" && emailVar == "" && senhaVar == "" && confirmarSenha == "") {
        mensagem.innerHTML = `Nenhum campo preenchido!!!`
        alerta.style.display = "flex"
    } else if (userVar == "") {
        mensagem.innerHTML = `O campo do User Name é obrigatório!`
        alerta.style.display = "flex"
    } else if (userVar.match(/[0-9]/ig) || userVar.length < 3) {
        mensagem.innerHTML = `Caracteres Inválidos no User Name!`
        alerta.style.display = "flex"
    } else if (emailVar == "") {
        mensagem.innerHTML = `O campo do E-mail é obrigatório!`
        alerta.style.display = "flex"
    } else if (emailVar.indexOf("@") < 0 || emailVar.indexOf(".") < 0) {
        mensagem.innerHTML = `E-mail inválido!!`
        alerta.style.display = "flex"
    } else if (senhaVar == "") {
        mensagem.innerHTML = `O campo senha é obrigatório!`
        alerta.style.display = "flex"
    } else if (senhaVar.length < 8) {
        mensagem.innerHTML = `A senha precisa ter 8 ou mais caracteres!`
        alerta.style.display = "flex"
    } else if (confirmarSenha == "") {
        mensagem.innerHTML = `O campo confirmar senha é obrigatório!`
        alerta.style.display = "flex"
    } else if (confirmarSenha != senhaVar) {
        mensagem.innerHTML = `A confirmação da senha não está igual!`
        alerta.style.display = "flex"
    } else {
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userServer: userVar,
                emailServer: emailVar,
                senhaServer: senhaVar
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    setTimeout(() => {
                        mensagem.innerHTML = `O cadastro foi efetuado!`
                        alerta.style.display = "flex"
                        bannerLogin.style.marginLeft = "0"
                        sessionStorage.clear()
                        setTimeout(() => {
                            alerta.style.display = "none"
                        }, 3000)
                    }, 1000)
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
    setTimeout(() => {
        alerta.style.display = "none"
    }, 3000)
}

function logar() {
    var emailVar = emailLoginUser.value
    var senhaVar = senhaLoginUser.value

    if (emailVar == "" || senhaVar == "") {
        mensagem.innerHTML = `Os campos estão vazios!`
        alerta.style.display = "flex"
    } else {
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
    setTimeout(() => {
        alerta.style.display = "none"
    }, 3000)
}