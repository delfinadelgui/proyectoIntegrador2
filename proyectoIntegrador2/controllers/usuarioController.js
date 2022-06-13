const nombreUsuario = require("../db/users");
const usuario = require ("../db/users");
const router = require("../routes");
const User = require("../database/models/User");
const { request } = require("express");
const bcrypt = require("bcryptjs");
const multer  = require('multer')
const upload = multer({ dest: './public/images/'})

const usuarioController = {
    usuario: function(req,res){
        return res.render ("profile", {usuarios: nombreUsuario.lista});
    },

    registro: function(req,res){
        
        return res.render ("registro",{error: false, ok: false});
    },

    registrar: function(req,res){
        
          if(req.body.contrasena.length<=3){
            return res.render ("registro", {error: true, message: "la contraseña debe tener mas de 3 caracteres", ok: false})
          }
        console.log(req.file)
        User.create({
            nombre: req.body.nombre, 
            apellido: req.body.apellido,
            usuario: req.body.usuario,
            contrasena: bcrypt.hashSync(req.body.contrasena,12),
            fecha_nacimiento: req.body.fecha_nacimiento,
            dni: req.body.dni,
            email: req.body.email,
            imagen: req.file.filename,
        })

        .then(resultado => {
            return res.render ("registro", {error: false, ok: true});
        }) 
        .catch(error => {
            console.log(JSON.stringify(error.errors[0].message))
            return res.render ("registro", {error: true, message:error.errors[0].message, ok: false});
        })
    },

    login: function(req,res){
        return res.render ("login", {error: false});
    },

    loguear: function(req,res){

        let usuario = req.query.usuario;
        let contrasena = req.query.contrasena;
        let usuarioLog;

        for(let i=0; i<nombreUsuario.lista.length; i++){

            let user = nombreUsuario.lista[i];

            if(user.contrasena == contrasena && user.Usuario == usuario){
                usuarioLog = user; 
            }
        }
        
        if(usuarioLog){
            return res.render('editar-usuario', {usuario: usuarioLog});
        }
        else{
            res.render('login', {error: 'usuario o contraseña invalida'});
        }
    },

    editarUser: function(req,res){
        return res.render ("editar-usuario", {usuarios: nombreUsuario.lista});
    }
}

module.exports = usuarioController;

