var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/WeCPDB' , function(err)
{
  if(!err)
  {
    console.log("mongodb connected");
  }
  else {
    console.log("There is an error in connecting mongodb");
  }
});

module.exports = mongoose;
