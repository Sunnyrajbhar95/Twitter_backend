const mongoose=require('mongoose')


const Connect=async()=>{
    mongoose.connect("mongodb://localhost:27017/Mongotest", {
        useNewUrlParser: true,
        useUnifiedTopology: true
     });
     console.log("Connection established")
}

module.exports=Connect