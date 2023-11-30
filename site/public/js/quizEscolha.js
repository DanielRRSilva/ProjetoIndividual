
var iconLoL = document.getElementById("iconLoL")
var iconR6 = document.getElementById("iconR6")
var nomeQuiz = ""
var idUsuario = sessionStorage.ID_USUARIO

document.addEventListener("click",(e)=> {
    if(e.target == iconLoL) {
        iconLoL.classList.add("active")
        iconR6.classList.remove("active")
        nomeQuiz = "quizLoL"
        buscarQuiz()
    }else if(e.target == iconR6) {
        iconLoL.classList.remove("active")
        iconR6.classList.add("active")
        nomeQuiz = "quizR6"
        buscarQuiz()
    }else if(!iconLoL.contains(e.target) && !iconR6.contains(e.target)) {
        iconLoL.classList.remove("active")
        iconR6.classList.remove("active")
    }
})

function irQuiz() {
    if(idUsuario == undefined) {
        alert(`É necessario fazer login para jogar!`)
    }else if(nomeQuiz == "") {
        alert(`É necessario selecionar um quiz!`)
    }else if(nomeQuiz == "quizLoL") {
        window.location = "quiz/quizLoL.html"
    }else if(nomeQuiz == "quizR6") {
        window.location = "quiz/quizR6.html"
    }
}

function buscarQuiz() {
    fetch("/quiz/selecionarQuiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nomeQuiz: nomeQuiz
        }),
    })
    .then(function (resposta) {
        console.log("resposta: ", resposta);
    
        if (resposta.ok) {
            resposta.json().then(json => {
                console.log(json)
                console.log(JSON.stringify(json))
                sessionStorage.ID_QUIZ = json.id
            })
        }else {
            throw "Houve um erro ao buscar o quiz!";
        }
    })
    .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    return false;
}