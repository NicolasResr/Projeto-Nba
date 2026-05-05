var timeModel = require("../models/timeModel");

function listar(req, res) {

    timeModel.listar()

        .then(function(resultado) {
            res.json(resultado);
        })

        .catch(function(erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listar
};