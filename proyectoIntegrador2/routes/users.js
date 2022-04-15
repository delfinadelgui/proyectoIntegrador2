var express = require('express');
var router = express.Router();

const usersController = require ("../controllers/usersControllers");

router.get("/", usersController.usuario);
router.get("/registro", usersController.registro);
router.get("/registrar", usersController.registrar);
router.get("/login", usersController.login);
router.get("/loguear", usersControllers.loguear);
router.get("/editar", usersControllers.editar);

module.exports = usersController;
