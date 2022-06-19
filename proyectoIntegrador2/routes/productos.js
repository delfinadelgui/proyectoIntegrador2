var express = require('express'); //usar modulo express
var router = express.Router(); //identif  y manejo como router

const productoController = require('../controllers/productoController');

const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function (req, file, cb) {
    //console.log(file);
    cb(null, Date.now() + '.' + file.mimetype.split('/').pop())
  }
})

const upload = multer({ storage });

router.get('/detalle/:id', productoController.detalleProducto); //hay que poner lo de product add
router.get('/agregar', productoController.agregarProducto); //ver esto
router.post('/crear-producto', upload.single("imagen"), productoController.crearProducto); 
router.get('/busqueda', productoController.busquedaProducto);
router.get("/eliminar/:id", productoController.eliminar);
router.get('/editar/:id', productoController.editarProducto); 
router.post('/actualizar/:id', upload.single("imagen"), productoController.actualizarProducto);
router.post('/comentario/:id', productoController.comentarios);


module.exports = router; 