module.exports = function(sequelize, DataTypes) {
    
    const Player = sequelize.define('Player', { //defino el alias player, y esto permite al modelo, usarlo cuando quiera y en cualquier parte del sistema  
        // Model attributes are defined here
            id:{
                autoIncrement: true,
                primaryKey:true,
                type: DataTypes.INTEGER.UNSIGNED,
            },
            nombre:{
                type: DataTypes.STRING
            },
            apellido:{
                type: DataTypes.STRING
            },
            fecha_nacimiento:{
                type: DataTypes.DATE
            },
            nacionalidad:{
                type: DataTypes.STRING
            },
            club:{
                type: DataTypes.STRING
            },
            posicion:{
                type: DataTypes.STRING
            },
            trayectoria:{
                type: DataTypes.STRING
            },
            fisico:{
                type: DataTypes.STRING
            },
            valor_mercado:{
                type: DataTypes.STRING
            },
            user_id:{
                type: DataTypes.INTEGER.UNSIGNED
            },
            descripcion:{
                type: DataTypes.STRING
            },
            imagen:{
                type: DataTypes.STRING
            },
    }, {
        tableName: 'players', //di la tabla no se llama en plural como el modelo, por ejemplo nuestra tabla de jugadores osea PLAYER en modelo se tiene que llamar PLAYERS LA TABLA
        timestamps: true, //me lo devuelve solo, en la base la tabla no tiene timestamps, serian si no tiene campos createdAT y updatedAT
        underscored: true, //le avisamos que en la db de la tabla hay guion bajo y no camelCase, por eso ponemos TRUE
    }); //estas tres variables son parte d euna funcion
    
    Player.associate = function(models) {
        models.Player.belongsTo(models.User, { foreignKey: 'user_id', as: "User" });

        models.Player.belongsToMany(models.User, { 
            through: "comments",
            as: "Comment",
            foreignKey: "player_id",
            timestamps: true
        })
    }

    return Player;

};

    


