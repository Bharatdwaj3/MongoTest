const express =  require("express");
const mongoose = require("mongoose");
const app = express();

const uri ="mongodb+srv://Ravi:Gl1OMoK44NN90l9j@cluster0.obywc6g.mongodb.net/?retryWrites=true&w=majority"


async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    }catch(error){ 
        console.error(error);
    }
}

connect();

app.listen(8080,()=>{
    console.log("Server started on port 8080");
});


