var mongoose = require('mongoose');

var user = mongoose.model('users' ,{
  user_id : {type : String},
  event_type : {type : String},
  image_type : {type : String},
  instance : {type : String}
} );

module.exports = user;
