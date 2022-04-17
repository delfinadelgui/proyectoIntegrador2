const jugadores = require ('../db/jugadores'); //para que pueda retornar la lista de jugadores que esta en la carpeta de jugadores en db

const comentario = require ('../db/comentarios'); //idem 
const nombreUsuario = require('../db/users');
const router = require('../routes');

const productoController = {

    agregarProducto : function(req, res){
        res.render('agregar-producto', {usuarios: nombreUsuario.lista }); //preguntar ESTOgi
    },

    detalleProducto : function(req, res) {

        let jugador; 
        
        for(let i=0; i<jugadores.lista.length; i++){

            if(req.params.id == jugadores.lista[i].id){
                
                jugador = jugadores.lista[i];

            }
        }
         //reo que hay quw hacer uno de cometariox

        res.render('detalle-producto', {jugador: jugador});       
    },
    
    busquedaProducto: function(req,res){

        console.log(req.query.search)

        let jugadoresEncontrados = [];

        for(let i=0; i<jugadores.lista.length; i++){

            let nombreMinuscula = jugadores.lista[i].nombre.toLowerCase();
            let apellidoMinuscula = jugadores.lista[i].apellido.toLowerCase();
            let busquedaMinuscula = req.query.search.toLowerCase();

            if(nombreMinuscula.indexOf(busquedaMinuscula) != -1 || apellidoMinuscula.indexOf(busquedaMinuscula) != -1){

                jugadoresEncontrados.push(jugadores.lista[i]);

            }
        }

        res.render('buscar-resultados', {jugadoresEncontrados: jugadoresEncontrados}); 
    },

    editar: function (req,res) {
        let jugadorEncontrado = jugadores.lista[0]
        res.render('editar-producto', {jugadorEncontrado: jugadorEncontrado});
    }
    
}

module.exports = productoController;
