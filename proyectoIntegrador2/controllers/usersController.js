const nombreUsuario = require("../db/users");
const usuario = require ("../db/users");

const usuarioController = {
    usuario: function(req,res){
        return res.render ("profile", {usuarios: nombreUsuario.lista});
    },

    registro: function(req,res){
        return res.render ("registro");
    },

    registrar: function(req,res){
        return res.send('recibiendo datos');
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

            if(user.Contrasena == contrasena && user.Usuario == usuario){
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

