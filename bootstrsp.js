module.exports = async () =>{

    const User = require("./models/User");
    const Login = require("./models/Login");

    const errHandler = (err) =>{
        console.error("Error: ", err);
    }

    const user = await User.create({firstName: "Testing", lastName:" One", phoneNumber:"23456789"}).catch(errHandler);
    
}
