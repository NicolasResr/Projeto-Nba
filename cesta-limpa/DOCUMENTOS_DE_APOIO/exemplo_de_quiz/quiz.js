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

    document.getElementById('pontuacao').style.display = "none"

    document.getElementById('jogo').style.display = "none"
}

function iniciarQuiz() {

    document.getElementById('pontuacao').style.display = "flex"

    document.getElementById('jogo').style.display = "flex"

    document.getElementById('btnIniciarQuiz').style.display = "none"

    document.getElementById('qtdQuestoes').innerHTML =
        quantidadeDeQuestoes

    preencherHTMLcomQuestaoAtual(0)

    btnTentarNovamente.disabled = true
}

function preencherHTMLcomQuestaoAtual(index) {

    const questaoAtual =
        listaDeQuestoes[index]

    numeroDaQuestaoAtual = index

    document.getElementById("spanNumeroDaQuestaoAtual").innerHTML =
        Number(index) + 1

    document.getElementById("spanQuestaoExibida").innerHTML =
        questaoAtual.pergunta

    document.getElementById("labelOpcaoUm").innerHTML =
        questaoAtual.alternativaA

    document.getElementById("labelOpcaoDois").innerHTML =
        questaoAtual.alternativaB

    document.getElementById("labelOpcaoTres").innerHTML =
        questaoAtual.alternativaC

    document.getElementById("labelOpcaoQuatro").innerHTML =
        questaoAtual.alternativaD
}

function avancar() {

    const options =
        document.getElementsByName("option")

    let possuiAlternativaEscolhida = false

    for (let i = 0; i < options.length; i++) {

        if (options[i].checked) {

            possuiAlternativaEscolhida = true

            break
        }
    }

    if (!possuiAlternativaEscolhida) {

        alert("Escolha uma alternativa.")

        return
    }

    checarResposta()

    desmarcarRadioButtons()

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

        if (options[i].checked) {

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

    let nomeJogadorFinal = ""

    let maiorQuantidadeRespostas =
        quantidadeRespostasCurry

    nomeJogadorFinal =
        "Stephen Curry"

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

    document.getElementById('msgFinal').innerHTML =

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
        `

    document.getElementById('jogo').style.display =
        "none"

    btnTentarNovamente.disabled = false
}

function tentarNovamente() {

    window.location.reload()
}