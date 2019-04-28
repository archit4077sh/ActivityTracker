var express = require('express');//requiring express module to handle routing
var router = express.Router(); // we will use it for routing
var user = require('../model/model.js'); //requiring model from model.js


router.post('/add' , function(req , res){  // creating routes for 'localhost:3000/add' URL.Data coming from post request will be saved to database when post request comes

  var temp_user = new user( //creating user to save in database where data is coming from angular app
    {
      user_id : req.body.user_id,
      event_type : req.body.event_type,
      image_type : req.body.image_type,
      instance : req.body.instance
    }
  );


  temp_user.save(function(err , docs) //saving the user into the database
  {
    if(!err){
        res.send(docs);
        console.log('Saved in database'); //saving succesful
    }
    else {
      console.log('There is an error in saving');
    }
  });
});





router.post('/list' , function(req , res){// creating routes for localhost:3000/list URL when post request comes

user.find({user_id: req.body.user_id}).then((result) => { //finding those user which are having a particular user id.

  res.send(result); //sending the result of query as response to angular app so that it can be used to show on localhost:4200/:id/admin page
}).catch((err) => {
  console.log("Error: " + err);
})
});


module.exports = router; //exporting router to use in index.js in app.use() function
