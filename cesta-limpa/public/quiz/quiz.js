const listaDeQuestoes = [

    {
        pergunta: "No último lance do jogo, o que você faria?",
        alternativaA: "Passe para um companheiro livre",
        alternativaB: "Poste no garrafão",
        alternativaC: "Arremesso de 3 pontos",
        alternativaD: "Enterrada forte",
        jogadorA: "Magic Johnson",
        jogadorB: "Shaquille O'Neal",
        jogadorC: "Stephen Curry",
        jogadorD: "LeBron James"
    },

    {
        pergunta: "Qual característica mais combina com você?",
        alternativaA: "Força",
        alternativaB: "Precisão",
        alternativaC: "Domínio físico",
        alternativaD: "Visão de jogo",
        jogadorA: "LeBron James",
        jogadorB: "Stephen Curry",
        jogadorC: "Shaquille O'Neal",
        jogadorD: "Magic Johnson"
    },

    {
        pergunta: "Qual posição você prefere jogar?",
        alternativaA: "Pivô",
        alternativaB: "Armador",
        alternativaC: "Ala",
        alternativaD: "Armador clássico",
        jogadorA: "Shaquille O'Neal",
        jogadorB: "Stephen Curry",
        jogadorC: "LeBron James",
        jogadorD: "Magic Johnson"
    },

    {
        pergunta: "O que mais importa para vencer?",
        alternativaA: "Controle do garrafão",
        alternativaB: "Trabalho em equipe",
        alternativaC: "Bolas de 3",
        alternativaD: "Liderança",
        jogadorA: "Shaquille O'Neal",
        jogadorB: "Magic Johnson",
        jogadorC: "Stephen Curry",
        jogadorD: "LeBron James"
    },

    {
        pergunta: "Qual jogada você mais gosta?",
        alternativaA: "Bandeja forte",
        alternativaB: "Assistência perfeita",
        alternativaC: "Enterrada no pivô adversário",
        alternativaD: "Step back",
        jogadorA: "LeBron James",
        jogadorB: "Magic Johnson",
        jogadorC: "Shaquille O'Neal",
        jogadorD: "Stephen Curry"
    },

    {
        pergunta: "Como seus amigos te definem em quadra?",
        alternativaA: "Imparável fisicamente",
        alternativaB: "Frio e decisivo",
        alternativaC: "Dominante",
        alternativaD: "Inteligente",
        jogadorA: "Shaquille O'Neal",
        jogadorB: "Stephen Curry",
        jogadorC: "LeBron James",
        jogadorD: "Magic Johnson"
    },

    {
        pergunta: "Qual fundamento você treinaria mais?",
        alternativaA: "Passe",
        alternativaB: "Arremesso",
        alternativaC: "Rebote",
        alternativaD: "Infiltração",
        jogadorA: "Magic Johnson",
        jogadorB: "Stephen Curry",
        jogadorC: "Shaquille O'Neal",
        jogadorD: "LeBron James"
    },

    {
        pergunta: "Qual seria sua maior qualidade na NBA?",
        alternativaA: "Força física",
        alternativaB: "Criatividade",
        alternativaC: "Pontuação",
        alternativaD: "Versatilidade",
        jogadorA: "Shaquille O'Neal",
        jogadorB: "Magic Johnson",
        jogadorC: "Stephen Curry",
        jogadorD: "LeBron James"
    },

    {
        pergunta: "Você prefere jogar...",
        alternativaA: "No garrafão",
        alternativaB: "Livre na linha de 3",
        alternativaC: "Controlando o ritmo",
        alternativaD: "Atacando a cesta",
        jogadorA: "Shaquille O'Neal",
        jogadorB: "Stephen Curry",
        jogadorC: "Magic Johnson",
        jogadorD: "LeBron James"
    },

    {
        pergunta: "Qual legado você gostaria de deixar?",
        alternativaA: "Maior criador de jogadas",
        alternativaB: "Jogador mais dominante fisicamente",
        alternativaC: "Melhor arremessador",
        alternativaD: "Jogador mais completo",
        jogadorA: "Magic Johnson",
        jogadorB: "Shaquille O'Neal",
        jogadorC: "Stephen Curry",
        jogadorD: "LeBron James"
    }

]

for (let i = 0; i < listaDeQuestoes.length; i++) {

    let indiceAleatorio =
        Math.floor(Math.random() * listaDeQuestoes.length)

    let perguntaTemporaria =
        listaDeQuestoes[i]

    listaDeQuestoes[i] =
        listaDeQuestoes[indiceAleatorio]

    listaDeQuestoes[indiceAleatorio] =
        perguntaTemporaria
}

let numeroDaQuestaoAtual = 0

let quantidadeDeQuestoes =
    listaDeQuestoes.length

let quantidadeRespostasCurry = 0
let quantidadeRespostasLeBron = 0
let quantidadeRespostasMagic = 0
let quantidadeRespostasShaq = 0

function onloadEsconder() {
    pontuacao.style.display = "none"
    jogo.style.display = "none"
}

function iniciarQuiz() {
    pontuacao.style.display = "flex"
    jogo.style.display = "flex"
    btnIniciarQuiz.style.display = "none"
    qtdQuestoes.innerHTML =
        quantidadeDeQuestoes
    preencherHTMLcomQuestaoAtual(0)

}

function preencherHTMLcomQuestaoAtual(index) {

    const questaoAtual =
        listaDeQuestoes[index]

    numeroDaQuestaoAtual = index

    spanNumeroDaQuestaoAtual.innerHTML =
        index + 1

    spanQuestaoExibida.innerHTML =
        questaoAtual.pergunta

    labelOpcaoUm.innerHTML =
        questaoAtual.alternativaA

    labelOpcaoDois.innerHTML =
        questaoAtual.alternativaB

    labelOpcaoTres.innerHTML =
        questaoAtual.alternativaC

    labelOpcaoQuatro.innerHTML =
        questaoAtual.alternativaD
}

function submeter() {
    const options =
        document.getElementsByName("option")
    let possuiAlternativaEscolhida = false

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked == true) {
            possuiAlternativaEscolhida = true
        }
    }

    if (possuiAlternativaEscolhida == false) {
        alert("Escolha uma alternativa.")
        return
    }
    checarResposta()
    desmarcarRadioButtons()
    spanCertas.innerHTML =
        numeroDaQuestaoAtual

    if (numeroDaQuestaoAtual < quantidadeDeQuestoes) {
        preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
        if (numeroDaQuestaoAtual == quantidadeDeQuestoes - 1) {
            infoQuestao.innerHTML =
                `<span>Última questão!</span>`
        }

    } else {

        finalizarJogo()
    }
}

function checarResposta() {
    const questaoAtual =
        listaDeQuestoes[numeroDaQuestaoAtual]
    const options =
        document.getElementsByName("option")
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked == true) {
            let jogadorEscolhido = ""
            if (options[i].value == "alternativaA") {
                jogadorEscolhido =
                    questaoAtual.jogadorA

            } else if (options[i].value == "alternativaB") {
                jogadorEscolhido =
                    questaoAtual.jogadorB

            } else if (options[i].value == "alternativaC") {
                jogadorEscolhido =
                    questaoAtual.jogadorC

            } else if (options[i].value == "alternativaD") {
                jogadorEscolhido =
                    questaoAtual.jogadorD
            }

            if (jogadorEscolhido == "Stephen Curry") {
                quantidadeRespostasCurry++
            } else if (jogadorEscolhido == "LeBron James") {
                quantidadeRespostasLeBron++
            } else if (jogadorEscolhido == "Magic Johnson") {
                quantidadeRespostasMagic++
            } else if (jogadorEscolhido == "Shaquille O'Neal") {
                quantidadeRespostasShaq++
            }
        }
    }

    numeroDaQuestaoAtual++
}

function desmarcarRadioButtons() {
    const options =
        document.getElementsByName("option")
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false
    }
}

function finalizarJogo() {

    let nomeJogadorFinal =
        "Stephen Curry"

    let maiorQuantidadeRespostas =
        quantidadeRespostasCurry

    if (quantidadeRespostasLeBron > maiorQuantidadeRespostas) {

        maiorQuantidadeRespostas =
            quantidadeRespostasLeBron

        nomeJogadorFinal =
            "LeBron James"
    }

    if (quantidadeRespostasMagic > maiorQuantidadeRespostas) {

        maiorQuantidadeRespostas =
            quantidadeRespostasMagic

        nomeJogadorFinal =
            "Magic Johnson"
    }

    if (quantidadeRespostasShaq > maiorQuantidadeRespostas) {

        maiorQuantidadeRespostas =
            quantidadeRespostasShaq

        nomeJogadorFinal =
            "Shaquille O'Neal"
    }

    let porcentagemCurry =
        (quantidadeRespostasCurry / quantidadeDeQuestoes) * 100

    let porcentagemLeBron =
        (quantidadeRespostasLeBron / quantidadeDeQuestoes) * 100

    let porcentagemMagic =
        (quantidadeRespostasMagic / quantidadeDeQuestoes) * 100

    let porcentagemShaq =
        (quantidadeRespostasShaq / quantidadeDeQuestoes) * 100

    fetch("/quiz/salvarResultado", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            jogadorResultadoServer:
                nomeJogadorFinal,

            porcentagemCurryServer:
                porcentagemCurry,

            porcentagemLeBronServer:
                porcentagemLeBron,

            porcentagemMagicServer:
                porcentagemMagic,

            porcentagemShaqServer:
                porcentagemShaq,

            fkUsuarioServer:
                sessionStorage.ID_USUARIO
        })
    })

        .then(function (resposta) {
            console.log("Resultado salvo!")
        })

        .catch(function (erro) {
            console.log(erro)
        })

    spanPontuacaoFinal.innerHTML =
        nomeJogadorFinal
    msgFinal.innerHTML =
        `
        <h2>
            Você joga como ${nomeJogadorFinal} 🏀
        </h2>

        <br>

        Stephen Curry:
        ${porcentagemCurry.toFixed(0)}%
        <br><br>

        LeBron James:
        ${porcentagemLeBron.toFixed(0)}%
        <br><br>

        Magic Johnson:
        ${porcentagemMagic.toFixed(0)}%
        <br><br>

        Shaquille O'Neal:
        ${porcentagemShaq.toFixed(0)}%
        <br><br><br> 

        <button id ="btnIniciarQuiz" onclick="irParaDashboard()"> Ver Dashboard  </button>
        `

    jogo.style.display = "none"
    btnSubmeter.disabled = true
}
function irParaDashboard() {
     window.location = "../dashboard/dashboard.html"; 
    }
