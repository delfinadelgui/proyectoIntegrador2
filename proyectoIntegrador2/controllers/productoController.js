const jugadores = require ('../db/jugadores'); //para que pueda retornar la lista de jugadores que esta en la carpeta de jugadores en db


const nombreUsuario = require('../db/users');
const comentarios = require('../db/comentarios');

const productoController = {

    agregarProducto : function(req, res){
        res.render('agregar-producto', {usuarios: nombreUsuario.lista }); 
    },

    detalleProducto : function(req, res) {

        let jugador; 
        
        for(let i=0; i<jugadores.lista.length; i++){

            if(req.params.id == jugadores.lista[i].id){
                
                jugador = jugadores.lista[i];

            }
        }

        let comentario;

        for(let i=0; i<comentarios.lista.length; i++){

            {
                
                comentario = comentarios.lista[i];

            }
        }
         //reo que hay quw hacer uno de cometariox

        res.render('detalle-producto', {jugador: jugador, comentario: comentario});       
    },
    
    busquedaProducto: function(req,res){

   

        res.render('buscar-resultados'); 
    }
   
}

module.exports = productoController;
