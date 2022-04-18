const db = require ('../db/jugadores'); 


const indexController = { 
    home: function (req, res){  //obj literal
        res.render('index', {jugadores: db.lista}) //ejs al nav
    },
    resultados: function(req,res){
        res.render("buscar-resultados")
    },
}

module.exports = indexController; 
