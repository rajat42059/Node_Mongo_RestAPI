const mongoose = require("mongoose");
var Schema = mongoose.Schema;



  const GeoScheme=new Schema({
type:{
    type:String,
    default:"Point"
},
coordinates:{
    type:[Number],
    index:"2dsphere"
}
  })


const NinjaScheme=new Schema({

name:{
type:String,
required:[true,'Name is required']
},
rank:{
type:String,
},
available:{
type:Boolean,
default:false
},
geometry:GeoScheme
//add in geo location
});

const Ninja=mongoose.model('ninja',NinjaScheme);

module.exports=Ninja;
