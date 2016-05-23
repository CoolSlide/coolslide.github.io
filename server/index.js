var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var exec = require('exec');

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
    var md = req.body['data'];
    console.log(md);
    fs.writeFileSync('tmp.md', md);
    exec(['cool-slide', 'tmp.md', 'tmp.html'], function(err, out, code){
        if(err) throw err;
        if(out === 'success');
        res.sendFile(path.resolve('tmp.html'));
    });
});

app.listen(8888);

