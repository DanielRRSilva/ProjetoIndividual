var cardQuiz = document.getElementById("cardQuiz")
var cardAlternativas = document.getElementById("cardAlternativas")
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
            <p>Você concluiu o quiz<br>seu total de acertos foi:</p>
            <div class="exibirAcertos">
                ${pontuacao}
            </div>
            <button onclick="sair()">Voltar para Home</button>
        `
    )    
}
function sair() {
    window.location = "../index.html"
}