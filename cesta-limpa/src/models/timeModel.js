var database = require("../database/config");

function listar() {

    var instrucaoSql = `
        SELECT * FROM time;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    listar
};