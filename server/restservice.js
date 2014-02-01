var express = require('express'),
    enemies = require('./enemies.js');

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/api/enemies', function(req, res) {
    res.json(enemies.getAll());
});

app.get('/api/enemies/:id', function(req, res) {
    res.json(enemies.getById(req.params.id));
});

app.listen(1337);

console.log('Listening on port 1337');
