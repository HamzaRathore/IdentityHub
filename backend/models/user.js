const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    
    password:{
        type:String,
        required:true,
        
    },
    number:{
        type:String,
        required:true,
        
    },
    passcode:{
        type:String,
        required:true,
        
    },
    card:{
        type:String,
        required:true,
        
    },
});

const User = mongoose.model('User',UserSchema);
module.exports=User;