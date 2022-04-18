const db = require ('../db/jugadores'); 
const usuario = require ('../db/users');

const indexController = { //metodo, func
    home: function (req, res){
        res.render('index', { jugadores: db.lista})
    },
    resultados: function(req,res){
        res.render("buscar-resultados")
    },
}

module.exports = indexController;
