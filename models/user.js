const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
},
       
{
    //for recording time of updates and stuff
    timestamps:true
    
});

const user =mongoose.model('user', userSchema);

module.exports =user;