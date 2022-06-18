//para que en los controladores podamos usar la info de db hayq ue hacer una variable que use lo de db
const db = require('../database/models')
const Player = db.Player 

const jugadores = require ('../db/jugadores'); //para que pueda retornar la lista de jugadores que esta en la carpeta de jugadores en db

const op = db.Sequelize.Op; 

const productoController = {
    
    
    agregarProducto : function(req, res){
        res.render('agregar-producto'); 
    },

    detalleProducto : function(req, res) {

        let id = req.params.id;
        Player.findByPk(id, { 
            include: [
                {model: db.User, as: "User"},
                {model: db.User, as: "Comment", through: { attributes: ["comment"]}, order: [["id", "DESC"]]} 
            ]  
        })
        .then( player => {
            //res.send(player);
            res.render('detalle-producto', {jugador: player});
        } )
               
    },
    
    busquedaProducto: function(req,res){

        res.render('buscar-resultados'); 
    },

    crearProducto: function(req,res){

        Player.create({ 
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            nacionalidad: req.body.nacionalidad,
            fecha_nacimiento: req.body.nacimiento,
            club: req.body.club,
            posicion: req.body.posicion,
            trayectoria: req.body.trayectoria,
            imagen: req.file.filename,
            fisico: req.body.fisico,
            valor_mercado: req.body.valor_mercado,
            descripcion: req.body.descripcion,
            user_id: req.session.user.id

        })
        .then( ()=> res.redirect("/productos/agregar"))
    },

    eliminar: function(req,res){ //eliminaste un producto estando logueado y siendo tu prod 
    
        Player.destroy({
                where: {

                    [op.and]: [ 
                       {
                        id: req.params.id
                       }, {
                        user_id: req.session.user.id
                       }
                    ]
                }
        })
        .then( ()=> res.redirect('/'))
        .catch(error => console.log(error))
    },

    editarProducto: function(req,res){
        Player.findOne({
            where: {

                [op.and]: [ 
                   {
                    id: req.params.id
                   }, {
                    user_id: req.session.user.id
                   }
                ]
            }
        })
        .then( (player)=> {
            if(player) {
                res.render('editar-producto', { player: player})
            }else{
                res.redirect("/productos/detalle/" + req.params.id)
            }
        })
    },

    actualizarProducto: function(req,res){ 
        Player.findOne({
            where: {

                [op.and]: [ 
                   {
                    id: req.params.id
                   }, {
                    user_id: req.session.user.id
                   }
                ]
            }
        })
        .then( (player)=> {
            if(player){
                Player.update({ 
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    nacionalidad: req.body.nacionalidad,
                    fecha_nacimiento: req.body.nacimiento,
                    club: req.body.club,
                    posicion: req.body.posicion,
                    trayectoria: req.body.trayectoria,
                    imagen: req.file.filename,
                    fisico: req.body.fisico,
                    valor_mercado: req.body.valor_mercado,
                    descripcion: req.body.descripcion
        
                },{
                    where: {
                        [op.and]: [ 
                           {
                            id: req.params.id
                           }, {
                            user_id: req.session.user.id
                           }
                        ]
                    }
                })
                .then( ()=> res.redirect("/productos/detalle/" + req.params.id))
            }else{
                res.redirect("/productos/detalle/" + req.params.id)
            }
    })
    .catch(error => console.log(error))


    }
}

module.exports = productoController;
