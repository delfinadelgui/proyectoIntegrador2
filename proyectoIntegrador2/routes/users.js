var express = require('express');
var router = express.Router();


const usuarioController = require('../controllers/usuarioController');

router.get("/", usuarioController.usuario);
router.get("/registro", usuarioController.registro);
router.post("/registrar", usuarioController.registrar);
router.get("/login", usuarioController.login); //localhost:3000/users/login
router.get("/loguear", usuarioController.loguear);
router.get("/editar", usuarioController.editarUser);

module.exports = router;
