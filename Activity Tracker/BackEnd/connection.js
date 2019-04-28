var mongoose = require('mongoose');  //requiring module

mongoose.connect('mongodb://localhost:27017/WeCPDB' , function(err)  //connecting to mongodb

 /*if you want to use cloud database then use URL : 'mongodb+srv://archit:dx6ApfTJQ4iSignG@cluster0-j7oxv.mongodb.net/WeCPDB?retryWrites=true'
 instead of 'mongodb://localhost:27017/WeCPDB'*/

{
  if(!err) //check for error
  {
    console.log("mongodb connected"); //there is not any error hence mongodb connected
  }
  else {
    console.log("There is an error in connecting mongodb"); //there is an error
  }
});

module.exports = mongoose; //making the connection available outside
