var express = require('express');//requiring express module to create server and handle routing
var bodyParser = require('body-parser');
var cors = require('cors'); //cors module for performing post/get request from server other than hosted at localhost:3000 (this server)

var connection = require('./connection.js');//requiring the connectin
var router = require('./controller/userController.js')//request userController for using router for routing of backend server

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/' , router); //using routes which are provided in router
app.listen(3000 , function(){console.log('Server Started')}); // starting server at port 3000
