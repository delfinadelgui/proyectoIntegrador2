const db = require ('../db/jugadores'); // const o let
const usuario = require ('../db/usuarios');

const indexController = {
    home: function (req, res){
        res.render('index', { jugadores: db.lista})
    },
    resultados: function(req,res){
        res.render("search-results")
    },
}

module.exports = indexController;
