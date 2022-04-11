const jugadores = require ('../db/jugadores'); //para que pueda retornar la lista de jugadores que esta en la carpeta de jugadores en db

const comentario = require ('../db/comentarios'); //idem 
const nombreUsuario = require('../db/users');

const productoController = {

    agregarProducto : function(req,res){
        res.render('product-add', {usuarios: nombreUsuario.lista }); //preguntar ESTOgi
    },

    detalleProducto : function(req, res) {
        
        res.render('jugadores', { jugadores: jugadores.lista, comentarios: comentarios.lista});
    } //agrgear product add
}

module.exports = productoController;
