var express = require('express');
var router = express.Router();

const usersControllers = require ("../controllers/usersControllers");

router.get("/", usersControllers.usuario);
router.get("/", usersControllers.registro);
router.get("/", usersControllers.login);
router.get("/", usersControllers.editarUser);

module.exports = router;
