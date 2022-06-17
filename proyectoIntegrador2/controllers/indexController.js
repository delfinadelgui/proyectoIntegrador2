const db = require ("../database/models"); 
const Player = db.Player;

const indexController = { 
    home: function (req, res){  //obj literal
        Player.findAll( {
            model: db.User     
        })
        .then( (players)=> {
           res.send(players),
            res.render('index', {jugadores: players}) 
    })
        //ejs al nav
    },
    resultados: function(req,res){
        res.render("buscar-resultados")
    },
}

module.exports = indexController; 
