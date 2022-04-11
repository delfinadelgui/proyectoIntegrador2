var express = require('express');
var router = express.Router();

const productoController = require('../controllers/productoController');

router.get('/', productoController.detalleProducto); //hay que poner lo de product add
router.get('/', productoController.agregarProducto); //ver esto










module.exports = router; 