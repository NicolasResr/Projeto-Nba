var express = require("express");

var router = express.Router();

var quizController =
    require("../controllers/quizController");

router.post(
    "/cadastrarResposta",
    function (req, res) {
        quizController.cadastrarResposta(req, res);
    }
);

router.post(
    "/salvarResultado",
    function (req, res) {
        quizController.salvarResultado(req,res);
    }
);

router.get(
    "/buscarResultado/:idUsuario",
    function (req, res) {
        quizController.buscarResultado(req, res);
    }
);



module.exports = router;