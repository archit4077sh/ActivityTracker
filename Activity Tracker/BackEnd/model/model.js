var mongoose = require('mongoose');

var user = mongoose.model('users' ,{ //forming model for the database. here first parameter is collection name and second parameter is schema
  user_id : {type : String},
  event_type : {type : String},//event can be Hover/Click
  image_type : {type : String},
  instance : {type : String} // instance is the timestamp
} );

module.exports = user;
