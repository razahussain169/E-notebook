const mongoose = require('mongoose');
const mongoUri = "mongodb://localhost:27017/e-notebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
const connectToMongo= ()=>{
    mongoose.connect(mongoUri,()=>{
        console.log("We have connected to the database");
    })

}
module.exports=connectToMongo;