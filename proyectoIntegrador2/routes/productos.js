var express = require('express');
var router = express.Router();

const productsRouter = require('../db/index');

router.get('/nombre/:nombre', function(req, res){//ruta paramatrizada copio lo de arriba y agrego brand, lo hago un parametro ( le pongo los dos :)
    
    //voy a querer tener un contenedor de datos (array) vacio
    let coincidencias = [];
    //recorrer el listado de autod
    for (let i = 0; i < jugadores.lista.length; i++){
            const jugadores = jugadores.lista[i]; //accedo al elemento del array con []
        //en cada vuelta quiero pregntarme si algun dato acerca de el jugador en cuestion ingresado en el parametro
        if(jugadores.nombre.toLocaleLowerCase=== req.params.nombre.toLocaleLowerCase){
            //si el jugador en cuestion coincide con el nombre, lo agrego a la colección (array)
            coincidencias.push(jugadores)
        }//sino no hago nada, por eso no hago un else
    }
    // una vez que terminaron de recorrer se quieren preguntar si el array que declaramos al ppio esta vacio o completo
    if (coincidencias.length !== 0) {
        // si NO esta vacia, quiero enviarle la colección
        return res.send(coincidencias)      
    } else { 
        //si esta vacia, quieeren enviarle un msg al usuario indicando que no se ecnontraon resultados  
        return res.send('No encontramos coincidencias')
    }
            
});      


router.get('/apellido/:apellido', function(req, res){//ruta paramatrizada copio lo de arriba y agrego brand, lo hago un parametro ( le pongo los dos :)
    
    //voy a querer tener un contenedor de datos (array) vacio
    let coincidencias = [];
    //recorrer el listado de autod
    for (let i = 0; i < jugadores.lista.length; i++){
            const jugadores = jugadores.lista[i]; //accedo al elemento del array con []
        //en cada vuelta quiero pregntarme si algun dato acerca de el jugador en cuestion ingresado en el parametro
        if(jugadores.apellido.toLocaleLowerCase=== req.params.apellido.toLocaleLowerCase){
            //si el jugador en cuestion coincide con el nombre, lo agrego a la colección (array)
            coincidencias.push(jugadores)
        }//sino no hago nada, por eso no hago un else
    }
    // una vez que terminaron de recorrer se quieren preguntar si el array que declaramos al ppio esta vacio o completo
    if (coincidencias.length !== 0) {
        // si NO esta vacia, quiero enviarle la colección
        return res.send(coincidencias)      
    } else { 
        //si esta vacia, quieeren enviarle un msg al usuario indicando que no se ecnontraon resultados  
        return res.send('No encontramos coincidencias')
    }
            
});      

router.get('/edad/:edad', function(req, res){//ruta paramatrizada copio lo de arriba y agrego brand, lo hago un parametro ( le pongo los dos :)
    
    //voy a querer tener un contenedor de datos (array) vacio
    let coincidencias = [];
    //recorrer el listado de autod
    for (let i = 0; i < jugadores.lista.length; i++){
            const jugadores = jugadores.lista[i]; //accedo al elemento del array con []
        //en cada vuelta quiero pregntarme si algun dato acerca de el jugador en cuestion ingresado en el parametro
        if(jugadores.edad.toLocaleLowerCase=== req.params.edad.toLocaleLowerCase){
            //si el jugador en cuestion coincide con el nombre, lo agrego a la colección (array)
            coincidencias.push(jugadores)
        }//sino no hago nada, por eso no hago un else
    }
    // una vez que terminaron de recorrer se quieren preguntar si el array que declaramos al ppio esta vacio o completo
    if (coincidencias.length !== 0) {
        // si NO esta vacia, quiero enviarle la colección
        return res.send(coincidencias)      
    } else { 
        //si esta vacia, quieeren enviarle un msg al usuario indicando que no se ecnontraon resultados  
        return res.send('No encontramos coincidencias')
    }
            
});      

router.get('/nacimiento/:nacimiento', function(req, res){//ruta paramatrizada copio lo de arriba y agrego brand, lo hago un parametro ( le pongo los dos :)
    
    //voy a querer tener un contenedor de datos (array) vacio
    let coincidencias = [];
    //recorrer el listado de autod
    for (let i = 0; i < jugadores.lista.length; i++){
            const jugadores = jugadores.lista[i]; //accedo al elemento del array con []
        //en cada vuelta quiero pregntarme si algun dato acerca de el jugador en cuestion ingresado en el parametro
        if(jugadores.nacimiento.toLocaleLowerCase=== req.params.nacimiento.toLocaleLowerCase){
            //si el jugador en cuestion coincide con el nombre, lo agrego a la colección (array)
            coincidencias.push(jugadores)
        }//sino no hago nada, por eso no hago un else
    }
    // una vez que terminaron de recorrer se quieren preguntar si el array que declaramos al ppio esta vacio o completo
    if (coincidencias.length !== 0) {
        // si NO esta vacia, quiero enviarle la colección
        return res.send(coincidencias)      
    } else { 
        //si esta vacia, quieeren enviarle un msg al usuario indicando que no se ecnontraon resultados  
        return res.send('No encontramos coincidencias')
    }
            
});      

router.get('/nacionalidad/:nacionalidad', function(req, res){//ruta paramatrizada copio lo de arriba y agrego brand, lo hago un parametro ( le pongo los dos :)
    
    //voy a querer tener un contenedor de datos (array) vacio
    let coincidencias = [];
    //recorrer el listado de autod
    for (let i = 0; i < jugadores.lista.length; i++){
            const jugadores = jugadores.lista[i]; //accedo al elemento del array con []
        //en cada vuelta quiero pregntarme si algun dato acerca de el jugador en cuestion ingresado en el parametro
        if(jugadores.nacionalidad.toLocaleLowerCase=== req.params.nacionalidad.toLocaleLowerCase){
            //si el jugador en cuestion coincide con el nombre, lo agrego a la colección (array)
            coincidencias.push(jugadores)
        }//sino no hago nada, por eso no hago un else
    }
    // una vez que terminaron de recorrer se quieren preguntar si el array que declaramos al ppio esta vacio o completo
    if (coincidencias.length !== 0) {
        // si NO esta vacia, quiero enviarle la colección
        return res.send(coincidencias)      
    } else { 
        //si esta vacia, quieeren enviarle un msg al usuario indicando que no se ecnontraon resultados  
        return res.send('No encontramos coincidencias')
    }
            
});      

router.get('/club/:club', function(req, res){//ruta paramatrizada copio lo de arriba y agrego brand, lo hago un parametro ( le pongo los dos :)
    
    //voy a querer tener un contenedor de datos (array) vacio
    let coincidencias = [];
    //recorrer el listado de autod
    for (let i = 0; i < jugadores.lista.length; i++){
            const jugadores = jugadores.lista[i]; //accedo al elemento del array con []
        //en cada vuelta quiero pregntarme si algun dato acerca de el jugador en cuestion ingresado en el parametro
        if(jugadores.club.toLocaleLowerCase=== req.params.club.toLocaleLowerCase){
            //si el jugador en cuestion coincide con el nombre, lo agrego a la colección (array)
            coincidencias.push(jugadores)
        }//sino no hago nada, por eso no hago un else
    }
    // una vez que terminaron de recorrer se quieren preguntar si el array que declaramos al ppio esta vacio o completo
    if (coincidencias.length !== 0) {
        // si NO esta vacia, quiero enviarle la colección
        return res.send(coincidencias)      
    } else { 
        //si esta vacia, quieeren enviarle un msg al usuario indicando que no se ecnontraon resultados  
        return res.send('No encontramos coincidencias')
    }
            
});      

router.get('/posicion/:posicion', function(req, res){//ruta paramatrizada copio lo de arriba y agrego brand, lo hago un parametro ( le pongo los dos :)
    
    //voy a querer tener un contenedor de datos (array) vacio
    let coincidencias = [];
    //recorrer el listado de autod
    for (let i = 0; i < jugadores.lista.length; i++){
            const jugadores = jugadores.lista[i]; //accedo al elemento del array con []
        //en cada vuelta quiero pregntarme si algun dato acerca de el jugador en cuestion ingresado en el parametro
        if(jugadores.posicion.toLocaleLowerCase=== req.params.posicion.toLocaleLowerCase){
            //si el jugador en cuestion coincide con el nombre, lo agrego a la colección (array)
            coincidencias.push(jugadores)
        }//sino no hago nada, por eso no hago un else
    }
    // una vez que terminaron de recorrer se quieren preguntar si el array que declaramos al ppio esta vacio o completo
    if (coincidencias.length !== 0) {
        // si NO esta vacia, quiero enviarle la colección
        return res.send(coincidencias)      
    } else { 
        //si esta vacia, quieeren enviarle un msg al usuario indicando que no se ecnontraon resultados  
        return res.send('No encontramos coincidencias')
    }
            
});      

router.get('/trayectoria/:trayectoria', function(req, res){//ruta paramatrizada copio lo de arriba y agrego brand, lo hago un parametro ( le pongo los dos :)
    
    //voy a querer tener un contenedor de datos (array) vacio
    let coincidencias = [];
    //recorrer el listado de autod
    for (let i = 0; i < jugadores.lista.length; i++){
            const jugadores = jugadores.lista[i]; //accedo al elemento del array con []
        //en cada vuelta quiero pregntarme si algun dato acerca de el jugador en cuestion ingresado en el parametro
        if(jugadores.trayectoria.toLocaleLowerCase=== req.params.trayectoria.toLocaleLowerCase){
            //si el jugador en cuestion coincide con el nombre, lo agrego a la colección (array)
            coincidencias.push(jugadores)
        }//sino no hago nada, por eso no hago un else
    }
    // una vez que terminaron de recorrer se quieren preguntar si el array que declaramos al ppio esta vacio o completo
    if (coincidencias.length !== 0) {
        // si NO esta vacia, quiero enviarle la colección
        return res.send(coincidencias)      
    } else { 
        //si esta vacia, quieeren enviarle un msg al usuario indicando que no se ecnontraon resultados  
        return res.send('No encontramos coincidencias')
    }
            
});       

router.get('/fisico/:fisico', function(req, res){//ruta paramatrizada copio lo de arriba y agrego brand, lo hago un parametro ( le pongo los dos :)
    
    //voy a querer tener un contenedor de datos (array) vacio
    let coincidencias = [];
    //recorrer el listado de autod
    for (let i = 0; i < jugadores.lista.length; i++){
            const jugadores = jugadores.lista[i]; //accedo al elemento del array con []
        //en cada vuelta quiero pregntarme si algun dato acerca de el jugador en cuestion ingresado en el parametro
        if(jugadores.fisico.toLocaleLowerCase=== req.params.fisico.toLocaleLowerCase){
            //si el jugador en cuestion coincide con el nombre, lo agrego a la colección (array)
            coincidencias.push(jugadores)
        }//sino no hago nada, por eso no hago un else
    }
    // una vez que terminaron de recorrer se quieren preguntar si el array que declaramos al ppio esta vacio o completo
    if (coincidencias.length !== 0) {
        // si NO esta vacia, quiero enviarle la colección
        return res.send(coincidencias)      
    } else { 
        //si esta vacia, quieeren enviarle un msg al usuario indicando que no se ecnontraon resultados  
        return res.send('No encontramos coincidencias')
    }
            
});      

router.get('/valorDeMercado/:valorDeMercado', function(req, res){//ruta paramatrizada copio lo de arriba y agrego brand, lo hago un parametro ( le pongo los dos :)
    
    //voy a querer tener un contenedor de datos (array) vacio
    let coincidencias = [];
    //recorrer el listado de autod
    for (let i = 0; i < jugadores.lista.length; i++){
            const jugadores = jugadores.lista[i]; //accedo al elemento del array con []
        //en cada vuelta quiero pregntarme si algun dato acerca de el jugador en cuestion ingresado en el parametro
        if(jugadores.valorDelMercado.toLocaleLowerCase=== req.params.valorDelMercado.toLocaleLowerCase){
            //si el jugador en cuestion coincide con el nombre, lo agrego a la colección (array)
            coincidencias.push(jugadores)
        }//sino no hago nada, por eso no hago un else
    }
    // una vez que terminaron de recorrer se quieren preguntar si el array que declaramos al ppio esta vacio o completo
    if (coincidencias.length !== 0) {
        // si NO esta vacia, quiero enviarle la colección
        return res.send(coincidencias)      
    } else { 
        //si esta vacia, quieeren enviarle un msg al usuario indicando que no se ecnontraon resultados  
        return res.send('No encontramos coincidencias')
    }
            
});      










module.exports = router; 