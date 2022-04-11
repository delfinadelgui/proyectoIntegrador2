const nombreUsuario = require("../db/users");
const usuario = require ("../db/users");

const usuarioController = {
    usuario: function(req,res){
        return res.render ("profile", {usuarios: nombreUsuario.lista});
    },

    registro: function(req,res){
        return res.render ("register");
    },

    login: function(req,res){
        return res.render ("login");
    },

    editarUser: function(req,res){
        return res.render ("profile-edit", {usuarios: nombreUsuario.lista});
    }
}