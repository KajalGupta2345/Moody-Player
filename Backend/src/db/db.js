const mongoose = require('mongoose');


function connectedToDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Connected to DB");
    })
    .catch((err)=>{
        console.log("Error connecting to DB",err);
    })
    
}

module.exports = connectedToDB;