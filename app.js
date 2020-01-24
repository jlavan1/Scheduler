const express = require("express")
const app = express()
/* const models = require('./models'); */
/* const session = require("express-session"); */
const bodyParser = require("body-parser")
const mustacheExpress = require("mustache-express")
const engine = mustacheExpress()
const path = require('path')
const VIEWS_PATH = path.join(__dirname, '/public')
const passport = require('passport')
const passportSetup = require('./config/passport-setup')

//DB Connection
//ElephantSQL

/*const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); */
/* require('dotenv').config(); 

var pbkdf2 = require('pbkdf2'); 
var salt = process.env.SALT_KEY;

function encryptionPassword(password) {
  var key = pbkdf2.pbkdf2Sync(
    password, salt, 36000, 256, 'sha256'
  );
  var hash = key.toString('hex');

  return hash;
}

app.use(session({
  secret: "cats", 
  resave: false, 
  saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public')); */

/*  PASSPORT SETUP  */

/* const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

app.get('/success', function(req, res) {
  if(req.isAuthenticated()) {
    res.send("Welcome " + req.user.username + "!!");
  } else {
    res.send("not authorized.");
  }
});

app.get('/logout', function(req, res) {
  if(req.isAuthenticated()){
    console.log("user logging out");
    req.logOut();
    res.send("user has logged out");
  } else {
    res.send("You don't have a session open");
  }
});

app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
  models.user.findOne({ where: { id: id } }).then(function (user) {
    cb(null, user);
  });
});   */

/* PASSPORT LOCAL AUTHENTICATION */

/* const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function (username, password, done) {
    models.user.findOne({
      where: {
        username: username
      }
    }).then(function (user) {
      if (!user) {
        return done(null, false);
      }

      if (user.password != encryptionPassword(password)) {
        return done(null, false);
      }
      return done(null, user);
    }).catch(function (err) {
      return done(err);
    });
  }
));

app.post('/',
  passport.authenticate('local', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/success');
  });


app.post("/sign-up", function (req, response) {
  models.user.create({ 
    username: req.body.username, 
    password: encryptionPassword(req.body.password)
  })
    .then(function (user) {
      response.send(user);
    });
    
});

app.listen(process.env.PORT, function () {
  console.log('server listening on port ' + 
  process.env.PORT + ' app name = ' + 
  process.env.PROJECT_NAME);
}) */

// Register '.mustache' extension with The Mustache Express
app.engine("mustache", mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))

app.set("view engine", "mustache")
app.set("views", VIEWS_PATH)

app.use("/css", express.static(__dirname + "/css"))


  // sequelize.close()

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/login", (req, res) => {
  res.render("login")
})

app.get("/register", (req, res) => {
  res.render("register")
})

app.get("/index", (req, res) => {
    res.render("index")
  })

  app.get("/Appointments", (req, res) => {
    res.render("Appointments")
  })

  app.get("/google", passport.authenticate('google', {
    scope: ['profile']
  }));

  app.get("/auth/google/redirect", passport.authenticate('google'),(req,res) => {
    res.send("You reached the callback URI")
  })

app.listen(3000, function() {
  console.log("Server is runniing on 3000")
})
