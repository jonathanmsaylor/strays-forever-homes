var express = require('express');
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname+'/public/dist'));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/cat_questions', {useNewUrlParser: true});

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(process.env.PORT || 8000);