const mongoose = require('mongoose')

const ServiceSchema=new mongoose.Schema({
    heading:{
        type:String,
    },
    description:{
        type:String,
    },
});

const Services = mongoose.model('Services',ServiceSchema);
module.exports=Services;