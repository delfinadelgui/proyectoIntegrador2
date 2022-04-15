var express = require('express');
var router = express.Router();

const productoController = require('../controllers/productoController');

router.get('/detalle/:id', productoController.detalleProducto); //hay que poner lo de product add
router.get('/agregar', productoController.agregarProducto); //ver esto
router.get('/busqueda', productoController.busquedaProducto);

module.exports = productoController; 