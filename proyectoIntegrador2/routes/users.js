var express = require('express');
var router = express.Router();

const usersController = require ("../controllers/usersController");

router.get("/", usersController.usuario);
router.get("/registro", usersController.registro);
router.get("/registrar", usersController.registrar);
router.get("/login", usersController.login);

module.exports = router;
