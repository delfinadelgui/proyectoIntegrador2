//para que en los controladores podamos usar la info de db hayq ue hacer una variable que use lo de db
const db = require('../database/models')
//const jugador = db.Player //alias




const jugadores = require ('../db/jugadores'); //para que pueda retornar la lista de jugadores que esta en la carpeta de jugadores en db


const nombreUsuario = require('../db/users');
const comentarios = require('../db/comentarios');

const productoController = {
    
    

    agregarProducto : function(req, res){
        res.render('agregar-producto', {usuarios: nombreUsuario.lista }); 
    },

    detalleProducto : function(req, res) {
       //aca como voya  ahcer referencia a la variable jugadores que lo que guarda es es la variable de db que hace referencia a los models y por ende podemos usar una funcion (promesas) que es de sequelize
        /*jugadores.findAll() //jugadores hace referecia a la variable de arriba y findAll es un metodo de modelos
            .then ( function (jugadores){ //usamos promesas un metodo de sequelize
                res.send(peliculas)
                
            })
            .catch(error => console.log(error))*/

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
