var database = require("../database/config")

function autenticar(email, senha) {

    console.log("ACESSEI O USUARIO MODEL");

    var instrucaoSql = `
        SELECT 
            id, 
            nome, 
            email, 
            fk_time as timeId 
        FROM usuario 
        WHERE email = '${email}' 
        AND senha = '${senha}';
    `;

    console.log("Executando SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha, fkTime) {

    console.log("ACESSEI O USUARIO MODEL");

    var instrucaoSql = `
        INSERT INTO usuario 
        (nome, email, senha, fk_time) 
        VALUES 
        ('${nome}', '${email}', '${senha}', '${fkTime}');
    `;

    console.log("Executando SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};