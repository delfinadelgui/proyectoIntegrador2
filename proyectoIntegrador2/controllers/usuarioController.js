
const User = require("../database/models/User");
const { request } = require("express");
const bcrypt = require("bcryptjs");

const multer  = require('multer')

const upload = multer({ dest: './public/images/'}) //ver

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
        
        console.log(req.body);

        User.findOne({
            where:{
                email:req.body.email
            }
        })
        .then(user=>{

            if(user==null || !bcrypt.compareSync(req.body.password, user.contrasena)){
                return res.render("login", {error: "Usuario o contraseña inválida"});

            }
        
            if(req.body.recordame != undefined) {
                res.cookie('userId',user.id,{maxAge: 1000*60*100} )
            }

            req.session.user = user
            return res.redirect("/users/editar")
        })

        
    },

    logout: function(req, res) {
        req.session.user = undefined;
        res.clearCookie('userId');
        res.redirect('/users/login');
    },

    editarUser: function(req,res){
        
        if(req.session.user == undefined) {
            return res.redirect('/users/login');
        }
        
        return res.render ("editar-usuario");
    }
}

module.exports = usuarioController;

