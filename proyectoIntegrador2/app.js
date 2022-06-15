const createError = require('http-errors');
const express = require('express'); 
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const app = express(); //se almacena aca 


// motor setup
app.set('views', path.join(__dirname, 'views')); //donde se encuentra 
app.set('view engine', 'ejs'); //que motor
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(function(req, res, next) {
  res.locals.user = req.session.user;
  return next();
}); // guardo en una variable locals.user los datos del usuario

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
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
