const mongoose=require('mongoose')

const PricingSchema= new mongoose.Schema({
    tier:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    feature:{
        type:[String],
        default:[]
    },
});

const Pricing = mongoose.model('Pricing',PricingSchema);
module.exports=Pricing;