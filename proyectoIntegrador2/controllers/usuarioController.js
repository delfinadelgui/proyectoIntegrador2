const nombreUsuario = require("../db/users");
const usuario = require ("../db/users");
const router = require("../routes");
const User = require("../database/models/User");
const { request } = require("express");
const bcrypt = require("bcryptjs");

const usuarioController = {
    usuario: function(req,res){
        return res.render ("profile", {usuarios: nombreUsuario.lista});
    },

    registro: function(req,res){
        
        return res.render ("registro",{error: false, ok: false});
    },

    registrar: function(req,res){
        console.log(req.body)
        User.create({
            nombre: req.body.nombre, 
            apellido: req.body.apellido,
            usuario: req.body.usuario,
            contrasena: bcrypt.hashSync(req.body.contrasena),
            fecha_naciomiento: req.body.fecha_nacimiento,
            dni: req.body.dni,
            email: req.body.email,
            imagen: "imagen",
        })

        .then(resultado => {
            return res.render ("registro", {error: false, ok: true});
        }) 
        .catch(error => {
            return res.render ("registro", {error: true, ok: false});
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

