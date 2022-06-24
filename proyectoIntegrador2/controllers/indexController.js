const db = require ("../database/models"); 
const Player = db.Player;

const indexController = { 
    home: function (req, res){  //obj literal
        db.Player.findAll({
            
              include : [{association: "User"}]
              
        })
        .then( (players)=> {
            res.render('index', {jugadores: players}) 
        })
        //ejs al nav
    },
    resultados: function(req,res){
        res.render("buscar-resultados")
    },
}

module.exports = indexController; 
