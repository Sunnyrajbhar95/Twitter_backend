const mongoose=require('mongoose')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const userScheme=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true
    },
    socketId:{
        type:String
    }
})

userScheme.pre("save",function(next){
    const user=this;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password=hash
    next();

})

userScheme.methods.compare=function fun(password)
{
    return bcrypt.compareSync(password, this.password)
}


userScheme.methods.jwtToken=function fun1()
{
   return jwt.sign({id:this._id, email:this.email}, process.env.SECRET_KEY, { expiresIn: '1h' });
}
const  User=mongoose.model('User',userScheme);
module.exports=User