const db = require ('../db/jugadores'); 


const indexController = { //metodo
    home: function (req, res){
        res.render('index', { jugadores: db.lista})
    },
    resultados: function(req,res){
        res.render("buscar-resultados")
    },
}

module.exports = indexController; //importamos
