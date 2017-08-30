const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const usersSchema= new Schema({
    userid:{type:String},

    password:{type:Number},

     state:{type:String}

    });

module.exports = mongoose.model('user',usersSchema);

