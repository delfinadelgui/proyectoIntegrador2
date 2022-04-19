var express = require('express'); //usar modulo express
var router = express.Router(); //identif  y manejo como router

const productoController = require('../controllers/productoController');

router.get('/detalle/:id', productoController.detalleProducto); //hay que poner lo de product add
router.get('/agregar', productoController.agregarProducto); //ver esto
router.get('/busqueda', productoController.busquedaProducto);


module.exports = router; 