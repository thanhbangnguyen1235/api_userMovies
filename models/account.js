import mongoose from 'mongoose';

const schema = mongoose.Schema({
    username:{
        type : String,
        unique : true,
        require : true,
        trim : true,
    },
    password : {
        type : String,
        require: true,
        trim: true,
    },

},{timestamps : true});

export const account = mongoose.model('account', schema)