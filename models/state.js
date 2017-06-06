var mongoose=require('mongoose');


var stateSchema=mongoose.Schema({
  name:{
    type:String
  },
  code:{
    type:String
  },
  loc:{
    type:{
      type:String
    },
    coordinates:{
      type:Array
    }

  }
});

var State=module.exports=mongoose.model('State',stateSchema);


//get all airports

module.exports.getStates=function(callback,limit){
  State.find(callback);
}
