var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var configDB = require('./config/database.js');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var bodyParser = require('body-parser');
//mongo
mongoose.connect(configDB.url, { useNewUrlParser: true, useUnifiedTopology: true })

var db = mongoose.connection

//checking connection to database
db.once('open', function (){
  console.log('connected')
})
db.on('error', function(err){
  console.log(err)
})
require('./config/passport')(passport)
var indexRouter = require('./routes/index');

var notesRouter = require('./routes/notes');
var categoryRouter = require('./routes/category');
var app = express();






// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'shhsecret' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/notes', notesRouter);
app.use('/category', categoryRouter);

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
