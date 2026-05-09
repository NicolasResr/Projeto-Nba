var express = require("express");

var router = express.Router();

var quizController =
    require("../controllers/quizController");

router.post(
    "/cadastrarResposta",
    function (req, res) {

        quizController.cadastrarResposta(
            req,
            res
        );
    }
);

module.exports = router;