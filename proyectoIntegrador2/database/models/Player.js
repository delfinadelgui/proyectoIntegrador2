module.exports = function (sequelize, dataTypes){
   //definir un alias, es lo que permite al modelo cuando lo quiero usar en un controlador o en cuañquier parte del sistema
    let alias = 'Player';

    let cols = {     //las distintas columnas y sus caracteristicas
        id:{
            autoIncrement: true,
            primaryKey:true,
            type: dataTypes.INTEGER,
        },
        titles:{
            type: dataTypes.STRING
        },
        rating:{
            type: dataTypes.DECIMAL
        },
        awards:{
            type: dataTypes.INTEGER
        },
        release_date:{
            type: dataTypes.DATE
        },
        lengths:{
            type: dataTypes.INTEGER
        },
        genre_id:{
            type: dataTypes.INTEGER
        }

    };


//config adicionales
let config = {
    tableName: 'players', //di la tabla no se llama en plural como el modelo, por ejemplo nuestra tabla de jugadores osea PLAYER en modelo se tiene que llamar PLAYERS LA TABLA
    timestamps: false/true, //me lo devuelve solo, en la base la tabla no tiene timestamps, serian si no tiene campos createdAT y updatedAT
    underscored: true, //le avisamos que en la base de la tabla hay guion bajo y no camelCase, por eso le ponemos TRUE SI USAMOS CAMEL CASE EN EL PROYECTO NO NECESTAMOS ESTA LINEA
} //estas tres variables son partes de una funcion

const Player = sequelize.define(alias, cols, config); //guardamos en una variable la ejecucion de un metodo

//relaciones entre tablas
return Player;

}

    


