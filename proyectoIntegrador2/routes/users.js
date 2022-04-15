var express = require('express');
var router = express.Router();

const usersController = require ("../controllers/usersController");

router.get("/", usersController.usuario);
router.get("/", usersController.registro);
router.get("/", usersController.login);
router.get("/", usersController.editarUser);

module.exports = router;
