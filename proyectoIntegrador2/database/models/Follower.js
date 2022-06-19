module.exports = function(sequelize, DataTypes) {
    
    const Follower = sequelize.define('Follower', { //defino el alias player, y esto permite al modelo, usarlo cuando quiera y en cualquier parte del sistema  
        // Model attributes are defined here
            id:{
                autoIncrement: true,
                primaryKey:true,
                type: DataTypes.INTEGER.UNSIGNED,
            },
            seguidor_id:{
                type: DataTypes.INTEGER.UNSIGNED
            },
            seguido_id:{
                type: DataTypes.INTEGER.UNSIGNED
            }
    }, {
        tableName: 'followers', //di la tabla no se llama en plural como el modelo, por ejemplo nuestra tabla de jugadores osea PLAYER en modelo se tiene que llamar PLAYERS LA TABLA
        timestamps: false, //me lo devuelve solo, en la base la tabla no tiene timestamps, serian si no tiene campos createdAT y updatedAT
        underscored: true, //le avisamos que en la db de la tabla hay guion bajo y no camelCase, por eso ponemos TRUE
    }); //estas tres variables son parte d euna funcion
    

    return Follower;
};