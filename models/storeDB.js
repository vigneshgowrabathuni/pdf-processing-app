var mongoose = require('mongoose');
var schema= mongoose.Schema;
var storeSchema = new schema({
  name : String,
  eMail:String,
  pwd: String
});

var storeModel = mongoose.model('storeDetail',storeSchema,'storeData');
var store = {};

store.getAllStores = function(callback){
  console.log("getAllStores");
  storeModel.find({},callback);
}

store.addingStore = function(storeObject,callback){
  console.log(storeObject);
   var newStore = new storeModel(storeObject);
   return newStore.save(callback);
}
module.exports = store;