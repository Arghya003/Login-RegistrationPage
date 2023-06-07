const mongoose=require('mongoose')

const reg_schema= new mongoose.Schema({
    name:{
        type: String,
        required: true,

    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    phone:{
        type:Number,
      required:true,
      unique :true ,
    },
    Class:{
        type:Number,
        required :true,
    },
    stream:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    cpassword:{
        type:String,
        required:true,
    }
});

const RegCollection= new mongoose.model('Regcollection',reg_schema)


module.exports= RegCollection;