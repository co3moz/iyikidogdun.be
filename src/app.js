var express = require('express');
var config = require('config');
var ezLogger = require('ezlogger')();
var compression = require('compression');

var straightLine = new Array(50).join('-');
console.log(straightLine);

var app = express();
console.log('Express initialized');

app.use(express.static(__dirname + '/public'));
console.log("Static field forwarded");

app.use(compression({
  filter: function (req, res) {
    if (req.headers['x-no-compression']) {
      return false
    }

    return compression.filter(req, res)
  }
}));

var project = global;
project.project = project;
project.app = app;
project.config = config;
project.express = express;
project.util = require("./util/_init");

app.get(/\/(.+)/, function (req, res) {
  res.sendfile('index.html', {root: './src/public'});
});

project.server = app.listen(config.get('port'));
console.log('Application started to listen at {family} {address}:{port}', project.server.address());