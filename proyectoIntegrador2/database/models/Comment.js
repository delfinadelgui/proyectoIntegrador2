module.exports = function(sequelize, DataTypes) {
    
    const Comment = sequelize.define('Comment', { //defino el alias player, y esto permite al modelo, usarlo cuando quiera y en cualquier parte del sistema  
        // Model attributes are defined here
            id:{
                autoIncrement: true,
                primaryKey:true,
                type: DataTypes.INTEGER.UNSIGNED,
            },
            user_id:{
                type: DataTypes.INTEGER.UNSIGNED
            },
            player_id:{
                type: DataTypes.INTEGER.UNSIGNED
            },
            comment:{
                type: DataTypes.STRING
            }
    }, {
        tableName: 'comments', //di la tabla no se llama en plural como el modelo, por ejemplo nuestra tabla de jugadores osea PLAYER en modelo se tiene que llamar PLAYERS LA TABLA
        timestamps: true, //me lo devuelve solo, en la base la tabla no tiene timestamps, serian si no tiene campos createdAT y updatedAT
        underscored: true, //le avisamos que en la db de la tabla hay guion bajo y no camelCase, por eso ponemos TRUE
    }); //estas tres variables son parte d euna funcion
    
    Comment.associate = function(models) {
        models.Comment.belongsTo(models.User, { foreignKey: 'user_id', as: "User" });
    }

    return Comment;

};