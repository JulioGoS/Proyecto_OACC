var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var http = equire('http');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var catalogoRouter = require('./routes/catalogo');
var nosotrosRouter = require('./routes/nosotros');
var sucursales = require('./routes/sucursales');

var app = express();

var port = 3000;

app.listen(port,()=>{
  console.log('La aplicaccion esta en linea');
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalogo', catalogoRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/sucursales', sucursales);

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
