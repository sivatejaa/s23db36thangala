var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username }, function (err, user) {
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  });
  }));
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var flowersRouter = require('./routes/flowers');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var Flower = require("./models/flower");
var resourceRouter=require("./routes/resourse");

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
//Bind connection to error event 
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")})

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
 }));
 app.use(passport.initialize());
 app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/flowers', flowersRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/flower', Flower);
app.use('/resourse', resourceRouter);
var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
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

async function recreateDB() {
  // Delete everything
  await Flower.deleteMany();
  
  // Add new instances
  let instance1 = new Flower({ flower_type: 'Rose', size: 'large', cost: 25.4 });
  let instance2 = new Flower({ flower_type: 'Lilly', size: 'medium', cost: 18.9 });
  let instance3 = new Flower({ flower_type: 'Jasmine', size: 'small', cost: 12.5 });
  
  instance1.save().then(doc=>{
    console.log("First object saved"+doc)
     }).catch(err=>{
    console.error(err)
    });

    instance2.save().then(doc=>{
      console.log("First object saved"+doc)
    }).catch(err=>{
      console.error(err)
      });

      instance3.save().then(doc=>{
        console.log("First object saved"+doc)
      }).catch(err=>{
        console.error(err)
        });
  
  console.log('Data seeded successfully!');
}

let reseed = true;
if (reseed) { recreateDB(); }

module.exports = app;
