
const db = require("../database/models");
const User = db.User;
const Follower = db.Follower;
const { request } = require("express");
const bcrypt = require("bcryptjs");

const multer  = require('multer')

const upload = multer({ dest: './public/images/'}) //ver

const op = db.Sequelize.Op;

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


            
               // seguido_id: req.params.id,
               // seguidor_id: req.session.user.id
           
                //return res.redirect("/users/perfil/" + req.params.id)
            

            req.session.user = user
            return res.redirect("/users/perfil/" + req.session.user.id)
        })

        
    },

    logout: function(req, res) {
        req.session.destroy();
        res.clearCookie('userId');
        res.redirect('/users/login');
    },

    editarUser: function(req,res){
        
        if(req.session.user == undefined) {
            return res.redirect('/users/login');
        }
        
        return res.render ("editar-usuario");
    },
    
    perfil: function(req,res){
        User.findByPk( req.params.id, {
            include: [
                {
                    model: db.Player,
                    as: "Player"
                },
                {
                    model: db.Comment,
                    as: "Comments"
                },
                {
                    model: db.User,
                    as: "Follower"
                }
            ]
        })
        .then( player => {
            Follower.findOne({
                where: {
                    [op.and]: [ 
                    {
                        seguido_id: req.params.id
                    }, {
                        seguidor_id: req.session.user.id
                    }
                    ]
                }
            })
            .then( seguido => { //esto es solo para ver si estas siguiendo o no; no para unfollow
                if(seguido){
                    res.render("perfil-usuario", { usuario: player.toJSON(), seguido:true})
                }else{
                    res.render("perfil-usuario", { usuario: player.toJSON(), seguido:false})
                }
            })
            //res.send(player)
            

        })
    },

    seguir: function(req,res){
        Follower.create({
            seguido_id: req.params.id,
            seguidor_id: req.session.user.id
        })
        .then( ()=> {
            return res.redirect("/users/perfil/" + req.params.id)
        })
        .catch(error => console.log(error))

    },

    dejar: function(req,res){
        Follower.destroy({
            where: {
                [op.and]: [ 
                {
                    seguido_id: req.params.id
                }, {
                    seguidor_id: req.session.user.id
                }
                ]
            }
        })
        .then( ()=> {
            return res.redirect("/users/perfil/" + req.params.id)
        })
        .catch(error => console.log(error))

    }
}

module.exports = usuarioController;

