var database = require("../database/config");

function cadastrarResposta(
    pergunta,
    resposta,
    jogadorRelacionado,
    fkUsuario
) {

    var instrucaoSql = `
    
        INSERT INTO respostaQuiz
        (
            pergunta,
            resposta,
            jogador_relacionado,
            fk_usuario
        )

        VALUES
        (
            '${pergunta}',
            '${resposta}',
            '${jogadorRelacionado}',
            ${fkUsuario}
        );
    
    `;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {

    cadastrarResposta
}