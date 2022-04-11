var express = require('express');
const productoController = require('../controllers/productoController');
var router = express.Router();

const productsRouter = require('../db/index');
    
    router.get('/', productoController.detalleProducto);











module.exports = router; 