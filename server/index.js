var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var exec = require('exec');
var coolSlide = require('cool-slide');

var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
      extended: true
}));
app.use(allowCrossDomain);

app.get('/', function(req, res){
    console.log('receive ' + req.method + ' request: ' + req.url);
    console.log(req.query);
    res.send('Hello World');
});

app.post('/preview', function(req, res){
    console.log('receive ' + req.method + ' request: ' + req.url);
    var mdStr = req.body['data'];
    var htmlStr = coolSlide(mdStr);
    res.send(htmlStr);
});

app.listen(8888);

