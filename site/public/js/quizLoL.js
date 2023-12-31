var cardQuiz = document.getElementById("cardQuiz")
var cardAlternativas = document.getElementById("cardAlternativas")
var fkUsuario = sessionStorage.ID_USUARIO
var fkQuiz = sessionStorage.ID_QUIZ
var pontuacao = 0
var questaoAtual = 1
var questionsLoL = [
    {
        question: `Qual o nome da desenvolvedora do LoL?`,
        answers: [
            { resposta: `RiotGames`, correct: true },
            { resposta: `Blizzard`, correct: false },
            { resposta: `RockStar`, correct: false },
            { resposta: `Ea Sports`, correct: false }
        ]
    },
    {
        question: `Quantos jogadores tem em uma partida competitiva de LoL?`,
        answers: [
            { resposta: `5`, correct: false },
            { resposta: `7`, correct: false },
            { resposta: `10`, correct: true },
            { resposta: `3`, correct: false }
        ]
    },
    {
        question: `Qual é o objetivo principal do LoL?`,
        answers: [
            { resposta: `Eliminar monstros`, correct: false },
            { resposta: `Juntar Gold`, correct: false },
            { resposta: `Eliminar inimigos`, correct: false },
            { resposta: `Destruir o Nexus`, correct: true }
        ]
    },
    {
        question: `Qual o maior rank dentro do LoL?`,
        answers: [
            { resposta: `Prata`, correct: false },
            { resposta: `Desafiante`, correct: true },
            { resposta: `Ascendente`, correct: false },
            { resposta: `Esmeralda`, correct: false }
        ]
    },
    {
        question: `Qual o maior evento competitivo de LoL no mundo?`,
        answers: [
            { resposta: `CBLol`, correct: false },
            { resposta: `Major`, correct: false },
            { resposta: `Worlds`, correct: true },
            { resposta: `LCK`, correct: false }
        ]
    },
    {
        question: `Quantos campeonatos mundiais o Brasil já ganhou?`,
        answers: [
            { resposta: `Nenhum`, correct: true },
            { resposta: `2`, correct: false },
            { resposta: `5`, correct: false },
            { resposta: `Todos`, correct: false }
        ]
    },
    {
        question: `Quando o LoL foi lançado oficialmente?`,
        answers: [
            { resposta: `18/03/2005`, correct: false },
            { resposta: `30/02/2007`, correct: false },
            { resposta: `25/12/2009`, correct: false },
            { resposta: `27/10/2009`, correct: true }
        ]
    },
    {
        question: `Qual frase é dita quando um aliado elimina 5 campeões inimigos?`,
        answers: [
            { resposta: `Penta Kill`, correct: true },
            { resposta: `Unstoppable`, correct: false },
            { resposta: `Legendary`, correct: false },
            { resposta: `Monster Kill`, correct: false }
        ]
    },
    {
        question: `Qual o nome da série que se passa no mundo de LoL?`,
        answers: [
            { resposta: `Stranger<br>Things`, correct: false },
            { resposta: `Teen Wolf`, correct: false },
            { resposta: `Arcane`, correct: true },
            { resposta: `Legends of Tomorrow`, correct: false }
        ]
    },
    {
        question: `O que significa a sigla URF?`,
        answers: [
            { resposta: `Ultra Relaxado e Feliz`, correct: false },
            { resposta: `Ultra Rapido e Furioso`, correct: true },
            { resposta: `Ultra Raivoso e Forte`, correct: false },
            { resposta: `Ultra Rico e Filantropo`, correct: false }
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
            <p>Você concluiu o quiz!<br>Seu total de acertos foi:</p>
            <div class="exibirAcertos">
                ${pontuacao}/10
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
                sessionStorage.ID_TENTATIVA = json.idTentativa
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
            selecionarTentativa()
          } else {
            throw "Houve um erro ao inserir a tentativa";
          }
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
        });
      return false;
}
function selecionarTentativa() {
    fetch("/quiz/selecionarTentativa", {
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
                console.log(resposta)
                sessionStorage.ID_TENTATIVA = json.fkTentativa
            })
            setTimeout(()=> {
                var fkTentativa = sessionStorage.ID_TENTATIVA
                guardarPontuacao(fkTentativa)
            }, 1000);
          } else {
            throw "Houve um erro ao selecionar a tentativa!";
          }
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
        });
      return false;
}
function guardarPontuacao(fkTentativa) {
    fetch("/quiz/inserirPontuacao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fkUsuario: fkUsuario,
            fkQuiz: fkQuiz,
            fkTentativa: fkTentativa,
            pontuacao: pontuacao
        }),
      })
        .then(function (resposta) {
          console.log("resposta: ", resposta);
          if (resposta.ok) {
            
          } else {
            throw "Houve um erro ao inserir a pontuação";
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