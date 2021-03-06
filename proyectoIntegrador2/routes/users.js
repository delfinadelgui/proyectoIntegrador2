var express = require('express');
var router = express.Router();


const usuarioController = require('../controllers/usuarioController');

const multer  = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images'));
  },
  filename: function (req, file, cb) {
    //console.log(file);
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage });


router.get("/", usuarioController.usuario);
router.get("/registro", usuarioController.registro);
router.post("/registrar", upload.single("foto"), usuarioController.registrar); //se ejecuta el middle where para subir la foto antes del controller
router.get("/login", usuarioController.login); //localhost:3000/users/login
router.post("/logout", usuarioController.logout); //localhost:3000/users/login
router.post("/loguear", usuarioController.loguear);
router.get("/editar", usuarioController.editarUser);
router.get("/perfil/:id", usuarioController.perfil);
router.get("/seguir/:id", usuarioController.seguir);
router.get("/dejarDeSeguir/:id", usuarioController.dejar);
router.post("/editar", upload.single("foto"), usuarioController.actualizarUser);

module.exports = router;
