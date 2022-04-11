const jugadores = require ('../db/jugadores'); //para que pueda retornar la lista de jugadores que esta en la carpeta de jugadores en db

const comentario = require ('../db/comentarios'); //idem 

const productoController = {

    detalleProducto : function(req, res) {
        
        res.render('jugadores', { jugadores: jugadores.lista, comentarios: comentarios.lista});
    }
}

module.exports = productoController;
