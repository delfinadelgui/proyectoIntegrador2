const createError = require('http-errors');
const express = require('express'); 
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const db = require('./database/models');
const User = db.User;

const app = express(); //se almacena aca 

app.use(cookieParser());

// motor setup
app.set('views', path.join(__dirname, 'views')); //donde se encuentra 
app.set('view engine', 'ejs'); //que motor

app.use(session({
  secret: 'miclavesecreta',
  resave: false,
  saveUninitialized: true,
}));

app.use(function(req, res, next) {
  if(req.session.user != undefined){
    res.locals.user = req.session.user
  }
  return next();
}); // guardo en una variable locals.user los datos del usuario

app.use(function(req, res, next){

  if(req.cookies.userId != undefined && req.session.user == undefined ){
    let userId = req.cookies.userId;
    //Tengo que ir a la db y preguntar
    User.findByPk(userId)
      .then(function(user){
          req.session.user = user
          res.locals.user = user
          console.log('se guardado desde la cookie');
          return next();
      })
      .catch(error => console.log(error))
  } else {
    return next();
  }
    
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));


//modulos propios = exportando 
const productRouter = require('./routes/productos'); 
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

//prefijos 
app.use('/', indexRouter); //localhost:3000
app.use('/productos', productRouter); //localhost:3000/productos/agregar
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
