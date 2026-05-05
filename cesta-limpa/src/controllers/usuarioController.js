var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {

  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (email == undefined) {

    res.status(400).send("Seu email está undefined!");

  } else if (senha == undefined) {

    res.status(400).send("Sua senha está undefined!");

  } else {

    usuarioModel
      .autenticar(email, senha)

      .then(function (resultadoAutenticar) {

        console.log(resultadoAutenticar);

        if (resultadoAutenticar.length == 1) {

          res.json({
            id: resultadoAutenticar[0].id,
            nome: resultadoAutenticar[0].nome,
            email: resultadoAutenticar[0].email,
            timeId: resultadoAutenticar[0].timeId
          });

        } else if (resultadoAutenticar.length == 0) {

          res.status(403).send("Email e/ou senha inválido(s)");

        } else {

          res.status(403).send("Mais de um usuário com o mesmo login!");

        }

      })

      .catch(function (erro) {

        console.log(erro);

        res.status(500).json(erro.sqlMessage);

      });
  }
}

function cadastrar(req, res) {

  var nome = req.body.nomeServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;
  var fkTime = req.body.idTimeVincularServer;

  if (nome == undefined) {

    res.status(400).send("Seu nome está undefined!");

  } else if (email == undefined) {

    res.status(400).send("Seu email está undefined!");

  } else if (senha == undefined) {

    res.status(400).send("Sua senha está undefined!");

  } else if (fkTime == undefined) {

    res.status(400).send("Seu time está undefined!");

  } else {

    usuarioModel
      .cadastrar(nome, email, senha, fkTime)

      .then(function (resultado) {

        res.json(resultado);

      })

      .catch(function (erro) {

        console.log(erro);

        res.status(500).json(erro.sqlMessage);

      });
  }
}

module.exports = {
  autenticar,
  cadastrar
};