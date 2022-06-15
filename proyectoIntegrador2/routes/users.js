var express = require('express');
var router = express.Router();


const usuarioController = require('../controllers/usuarioController');

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


router.get("/", usuarioController.usuario);
router.get("/registro", usuarioController.registro);
router.post("/registrar", upload.single("foto"), usuarioController.registrar); //se ejecuta el middle where para subir la foto antes del controller
router.get("/login", usuarioController.login); //localhost:3000/users/login
router.post("/loguear", usuarioController.loguear);
router.get("/editar", usuarioController.editarUser);

module.exports = router;
