// add this file to .gitignore
require('dotenv').config()

module.exports = {

    google:{
        clientID: process.env.GOOGLE_CLIENTID,
        clientSecret: process.env.GOOGLE_SECRET
    },

    ElephantSQL:{
        username: "glehaonh",
        password: "xMxuAhoX86JZsmAYjiyMxkKTb3C_GHyb",
        database: "glehaonh",
        host: "rajje.db.elephantsql.com",
        dialect: "postgres"

    }

};
