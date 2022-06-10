const {  DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('User', {
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
      usuario:{
          type: DataTypes.STRING
      },
      contrasena:{
          type: DataTypes.STRING
      },
      fecha_nacimiento:{
          type: DataTypes.DATE
      },
      dni:{
          type: DataTypes.STRING
      },
      email:{
          type: DataTypes.STRING
      },
      imagen:{
          type: DataTypes.STRING
      }
}, {
  tableName: 'users', //di la tabla no se llama en plural como el modelo, por ejemplo nuestra tabla de jugadores osea PLAYER en modelo se tiene que llamar PLAYERS LA TABLA
  timestamps: true, //me lo devuelve solo, en la base la tabla no tiene timestamps, serian si no tiene campos createdAT y updatedAT
  underscored: true, 
});

// `sequelize.define` also returns the model
module.exports = User