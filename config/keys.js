// add this file to .gitignore
require('dotenv').config()

module.exports = {

    google:{
        clientID: process.env.GOOGLE_CLIENTID,
        clientSecret: process.env.GOOGLE_SECRET
    }

};
