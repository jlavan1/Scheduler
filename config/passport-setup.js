const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require('./keys');
const user = require('../models');

passport.use(new GoogleStrategy({

    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret

}, (accessToken, refreshToken, profile, done)=>{
    
    console.log(profile);
    
    new user({
        username: profile.displayName,
        googleID: profile.id
    }).save().then((newUser) => {
        console.log("New User Created" + newUser)
    })

})
)