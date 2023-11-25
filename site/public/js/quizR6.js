var cardQuiz = document.getElementById("cardQuiz")
var cardAlternativas = document.getElementById("cardAlternativas")
var fkUsuario = sessionStorage.ID_USUARIO
    var fkQuiz = sessionStorage.ID_QUIZ
var pontuacao = 0
var questaoAtual = 1
var questionsLoL = [
    {
        question: `Quantos jogadores tem em cada equipe de R6?`,
        answers: [
            { resposta: `12`, correct: false },
            { resposta: `5`, correct: true },
            { resposta: `6`, correct: false },
            { resposta: `8`, correct: false }
        ]
    },
    {
        question: `Qual o maior evento<br>competitivo do R6?`,
        answers: [
            { resposta: `Invitational`, correct: true },
            { resposta: `Major`, correct: false },
            { resposta: `Champions`, correct: false },
            { resposta: `Worlds`, correct: false }
        ]
    },
    {
        question: `Qual desses operadores é brasileiro?`,
        answers: [
            { resposta: `Azami`, correct: false },
            { resposta: `Nomad`, correct: false },
            { resposta: `Maestro`, correct: false },
            { resposta: `Caveira`, correct: true }
        ]
    },
    {
        question: `Qual o maior rank dentro do R6?`,
        answers: [
            { resposta: `Diamante`, correct: false },
            { resposta: `Champion`, correct: true },
            { resposta: `Ascendente`, correct: false },
            { resposta: `Esmeralda`, correct: false }
        ]
    },
    {
        question: `Quantos operadores existem<br>no R6 atualmente?`,
        answers: [
            { resposta: `30`, correct: false },
            { resposta: `60`, correct: true },
            { resposta: `45`, correct: false },
            { resposta: `80`, correct: false }
        ]
    },
    {
        question: `Quantos campeonatos mundiais o Brasil já ganhou?`,
        answers: [
            { resposta: `4`, correct: true },
            { resposta: `3`, correct: false },
            { resposta: `6`, correct: false },
            { resposta: `Nenhum`, correct: false }
        ]
    },
    {
        question: `Quando o R6 foi lançado oficialmente?`,
        answers: [
            { resposta: `21/07/2013`, correct: false },
            { resposta: `25/12/2014`, correct: false },
            { resposta: `15/05/2012`, correct: false },
            { resposta: `01/12/2015`, correct: true }
        ]
    },
    {
        question: `Qual o gênero do R6?`,
        answers: [
            { resposta: `Tiro Tático`, correct: true },
            { resposta: `MOBA`, correct: false },
            { resposta: `RPG`, correct: false },
            { resposta: `Corrida`, correct: false }
        ]
    },
    {
        question: `Qual o objetivo do modo de jogo "Bomb"?`,
        answers: [
            { resposta: `Eliminar os inimigos`, correct: false },
            { resposta: `Resgatar o refem`, correct: false },
            { resposta: `Desarmar a bomba`, correct: true },
            { resposta: `Encontra os inimigos`, correct: false }
        ]
    },
    {
        question: `Oque são os gadgets?`,
        answers: [
            { resposta: `Equipamentos unicos`, correct: true },
            { resposta: `Armas e munições`, correct: false },
            { resposta: `Coletes e capacetes`, correct: false },
            { resposta: `Drones e cameras`, correct: false }
        ]
    }
]
function iniciarQuiz() {
    pontuacao = 0
    questaoAtual = 1
    for (var filhos = cardAlternativas.childElementCount; filhos > 0; filhos = cardAlternativas.childElementCount) {
        cardAlternativas.removeChild(cardAlternativas.firstElementChild)
    }
    setTimeout(() => {
        cardQuiz.insertAdjacentHTML("afterbegin", `<p>${questionsLoL[0].question}</p>`)
        questionsLoL[0].answers.forEach(answer =>{
            const button = document.createElement("button")
            button.innerHTML = answer.resposta
            button.classList.add("alternativa")
            cardAlternativas.appendChild(button)
            if(answer.correct) {
                button.dataset.correct = answer.correct
            }
            button.addEventListener("click", selectedAnswer)
        })
    }, 300)
}
function selectedAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect) {
        pontuacao++
    }
    proximaPergunta()
}
function proximaPergunta() {
    cardQuiz.removeChild(cardQuiz.firstElementChild)
    for (var filhos = cardAlternativas.childElementCount; filhos > 0; filhos = cardAlternativas.childElementCount) {
        cardAlternativas.removeChild(cardAlternativas.firstElementChild)
    }
    setTimeout(() => {
        if (questaoAtual <= 9) {
            cardQuiz.insertAdjacentHTML("afterbegin", `<p>${questionsLoL[questaoAtual].question}</p>`)
            questionsLoL[questaoAtual].answers.forEach(answer =>{
                const button = document.createElement("button")
                button.innerHTML = answer.resposta
                button.classList.add("alternativa")
                cardAlternativas.appendChild(button)
                if(answer.correct) {
                    button.dataset.correct = answer.correct
                }
                button.addEventListener("click", selectedAnswer)
            })
        } else {
            cardQuiz.removeChild(cardQuiz.firstElementChild)
            cardQuiz.insertAdjacentHTML("beforeend",`<button onclick="finalizarQuiz()">Finalizar Quiz</button>`)
        }
        questaoAtual += 1
    }, 300)
}
function finalizarQuiz() {
    for (var filhos = cardAlternativas.childElementCount; filhos > 0; filhos = cardAlternativas.childElementCount) {
        cardAlternativas.removeChild(cardAlternativas.firstElementChild)
    }
    for (var filhos = cardQuiz.childElementCount; filhos > 0; filhos = cardQuiz.childElementCount) {
        cardQuiz.removeChild(cardQuiz.firstElementChild)   
    }
    cardQuiz.insertAdjacentHTML("afterbegin", 
        `
            <h2>Parabéns</h2>
            <p>Você concluiu o quiz<br>seu total de acertos foi:</p>
            <div class="exibirAcertos">
                ${pontuacao}
            </div>
            <div class="botoesFinal">
                <button onclick="voltarQuiz()">Jogar de Novo</button>
                <button onclick="sair()">Voltar para Home</button>
            </div>
        `
    )
    fetch("/quiz/verificarTentativa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fkUsuario: fkUsuario,
            fkQuiz: fkQuiz
        }),
      })
        .then(function (resposta) {
          console.log("resposta: ", resposta);
          if (resposta.ok) {
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.TENTATIVA = json.tentativa
            });
            setTimeout(()=> {
                var nTentativa = sessionStorage.TENTATIVA
                inserirTentativa(nTentativa)
            },1000)
          } else {
            throw "Houve um erro ao verificar a tentativa";
          }
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
        });
      return false;    
}
function inserirTentativa(nTentativa) {
    var tentativaAtual = Number(nTentativa) + 1
    fetch("/quiz/inserirTentativa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fkUsuario: fkUsuario,
            fkQuiz: fkQuiz,
            tentativaAtual: tentativaAtual
        }),
      })
        .then(function (resposta) {
          console.log("resposta: ", resposta);
          if (resposta.ok) {
            
          } else {
            throw "Houve um erro ao inserir a tentativa";
          }
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
        });
      return false;
}
function sair() {
    window.location = "../index.html"
}
function voltarQuiz() {
    window.location = "../quizEscolha.html"
}