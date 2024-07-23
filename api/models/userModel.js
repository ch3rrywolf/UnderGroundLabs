const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    password:{
        type:String,
        requird:true
    },
    is_verified:{
        type:String,
        requird:true
    },
    image:{
        type:String,
        requird:true
    }

});

module.exports = mongoose.model("User", userSchema);