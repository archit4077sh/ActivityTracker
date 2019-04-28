var express = require('express');//requiring it to creating the server
var bodyParser = require('body-parser');
var cors = require('cors');//requiring it for recieving post request from server other than hosted at  localhost:3000 (this server)

var connection = require('./connection.js');
var router = require('./controller/userController.js')

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/' , router);
app.listen(3000 , function(){console.log('Server Started')});//Started a server
