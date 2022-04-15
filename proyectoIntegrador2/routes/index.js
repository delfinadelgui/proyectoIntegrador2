var express = require('express');
var router = express.Router();

const indexController = require ("../controllers/indexController");

router.get("/", indexController.home);
router.get("/resultados", indexController.resultados); //http:localhost:3000

module.exports = router;
