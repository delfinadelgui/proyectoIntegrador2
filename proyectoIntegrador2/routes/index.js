var express = require('express');
var router = express.Router();

const indexController = require ("../controllers/indexController");

router.get("/", indexController.home);
router.get("/", indexController.resultados);

module.exports = router;
