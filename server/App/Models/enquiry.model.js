let mongoose = require('mongoose');

let userEnquiresSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phone:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
});

let enquirymodel=mongoose.model("enquiries",userEnquiresSchema)

module.exports=enquirymodel;