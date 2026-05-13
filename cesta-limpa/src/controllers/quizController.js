var quizModel =
    require("../models/quizModel");

function cadastrarResposta(req, res) {
    var resposta = req.body.respostaServer;
    var jogadorRelacionado = req.body.jogadorRelacionadoServer;
    var fkUsuario = req.body.fkUsuarioServer;

    if (resposta == undefined) {
        res.status(400).send("A resposta está undefined!");
    } else if (jogadorRelacionado == undefined) {
        res.status(400).send("O jogador está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("O usuário está undefined!");
    } else {

        quizModel.cadastrarResposta(
            resposta,
            jogadorRelacionado,
            fkUsuario
        )

        .then(function (resultado) {
            res.json(resultado);
        })

        .catch(function (erro) {
            console.log(erro)
            console.log(
                "\nHouve um erro ao salvar a resposta! Erro: ",
                erro.sqlMessage
            );

            res.status(500).json(
                erro.sqlMessage
            );
        });
    }
}

function salvarResultado(req, res) {

    var jogadorResultado = req.body.jogadorResultadoServer;
    var porcentagemCurry = req.body.porcentagemCurryServer;
    var porcentagemLeBron = req.body.porcentagemLeBronServer;
    var porcentagemMagic = req.body.porcentagemMagicServer;
    var porcentagemShaq = req.body.porcentagemShaqServer;
    var fkUsuario = req.body.fkUsuarioServer;

    if (jogadorResultado == undefined) {
        res.status(400).send("O jogador resultado está undefined!");

    } else if (fkUsuario == undefined) {
        res.status(400).send("O usuário está undefined!");

    } else {
        quizModel.salvarResultado(
            jogadorResultado,
            porcentagemCurry,
            porcentagemLeBron,
            porcentagemMagic,
            porcentagemShaq,
            fkUsuario
        )

        .then(function (resultado) {
            res.json(resultado);
        })

        .catch(function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao salvar o resultado! Erro: ",
                erro.sqlMessage
            );

            res.status(500).json(
                erro.sqlMessage
            );
        });
    }
}

function buscarResultado(req, res) {
    var idUsuario = req.params.idUsuario;
    quizModel.buscarResultado(idUsuario)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.status(404).send("Nenhum resultado encontrado");
        }
    })

    .catch(function (erro) {
        console.log(erro);
        console.log(
            "\nHouve um erro ao buscar o resultado! Erro: ",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    cadastrarResposta,
    salvarResultado,
    buscarResultado
}