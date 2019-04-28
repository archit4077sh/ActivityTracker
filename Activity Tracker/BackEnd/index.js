var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var connection = require('./connection.js');
var router = require('./controller/userController.js')

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/' , router);
app.listen(3000 , function(){console.log('Server Started')});
