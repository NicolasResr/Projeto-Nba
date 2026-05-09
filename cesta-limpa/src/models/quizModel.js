var database =
    require("../database/config");

function cadastrarResposta(
    resposta,
    jogadorRelacionado,
    fkUsuario
) {

    var instrucaoSql = `

        INSERT INTO respostaQuiz
        (resposta, jogador_relacionado, fk_usuario)
        VALUES
        ('${resposta}', '${jogadorRelacionado}', ${fkUsuario});
    `;
    console.log(instrucaoSql);
    return database.executar(instrucaoSql);
}

function salvarResultado(
    jogadorResultado,
    porcentagemCurry,
    porcentagemLeBron,
    porcentagemMagic,
    porcentagemShaq,
    fkUsuario
) {

    var instrucaoSql = `

        INSERT INTO resultadoQuiz
        (
            jogador_resultado,
            porcentagem_curry,
            porcentagem_lebron,
            porcentagem_magic,
            porcentagem_shaq,
            fk_usuario
        )

        VALUES
        (
            '${jogadorResultado}',
            ${porcentagemCurry},
            ${porcentagemLeBron},
            ${porcentagemMagic},
            ${porcentagemShaq},
            ${fkUsuario}
        );

    `;
    console.log(instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarResposta,
    salvarResultado
}