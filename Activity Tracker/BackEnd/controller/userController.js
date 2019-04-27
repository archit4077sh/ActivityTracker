var express = require('express');
var router = express.Router();
var user = require('../model/model.js');



router.post('/add' , function(req , res){

  var temp_user = new user(
    {
      user_id : req.body.user_id,
      event_type : req.body.event_type,
      image_type : req.body.image_type,
      instance : req.body.instance
    }
  );

  console.log(temp_user);

  temp_user.save(function(err , docs)
  {
    if(!err){
        res.send(docs);
        console.log('Saved a new user');
    }
    else {
      console.log('There is an error in saving');
    }
  });
});





router.post('/list' , function(req , res){
//console.log(req.body.user_id);
user.find({user_id: req.body.user_id}).then((result) => {
//  console.log(result);
  res.send(result);
}).catch((err) => {
  console.log("Error: " + err);
})
});


module.exports = router;
