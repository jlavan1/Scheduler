const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require('./keys');
const models = require('../models');


passport.serializeUser((user, done) => {
    console.log(user.dataValues.id)
    done(null, user.dataValues.id)
})

passport.deserializeUser((id, done) => {
    console.log("Deserilize User" + id)
    models.user.findOne({ where: { id: id } }).then((user) => {
        console.log("Found ID in DB")
        console.log(user)
        done(null, user)
    })
})

passport.use(new GoogleStrategy({

    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret

}, (accessToken, refreshToken, profile, done) => {

    console.log(profile)
    models.user.findOne({
        where: {
            googleID: profile.id
        }
    }).then((currentUser) => {
        if (currentUser) {
            console.log('Current User')

            console.log('user is' + currentUser)
            console.log(currentUser)
            done(null, currentUser);


        } else {
            console.log(profile);

            models.user.create({
                firstName: profile.displayName,
                googleID: profile.id
            }).then((user) => {
                console.log("New User Created")
                console.log(user)
                done(null, user)
            })

        }

    })
}))
