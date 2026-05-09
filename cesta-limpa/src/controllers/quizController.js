var quizModel = require("../models/quizModel");

function cadastrarResposta(req, res) {

    var pergunta = req.body.perguntaServer;

    var resposta = req.body.respostaServer;

    var jogadorRelacionado =
        req.body.jogadorRelacionadoServer;

    var fkUsuario =
        req.body.fkUsuarioServer;

    if (pergunta == undefined) {

        res.status(400).send(
            "A pergunta está undefined!"
        );

    } else if (resposta == undefined) {

        res.status(400).send(
            "A resposta está undefined!"
        );

    } else if (jogadorRelacionado == undefined) {

        res.status(400).send(
            "O jogador está undefined!"
        );

    } else if (fkUsuario == undefined) {

        res.status(400).send(
            "O usuário está undefined!"
        );

    } else {

        quizModel.cadastrarResposta(

            pergunta,
            resposta,
            jogadorRelacionado,
            fkUsuario

        )

        .then(function (resultado) {

            res.json(resultado);

        })

        .catch(function (erro) {

            console.log(erro);

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

module.exports = {

    cadastrarResposta
}