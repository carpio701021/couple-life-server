var fs = require("fs");
var config = JSON.parse(fs.readFileSync("config.json"));

var restify = require('restify');

var server = restify.createServer({
  name: 'server-couple-life',
  version: '0.0.1'
});

var mongoose = require('mongoose');

var uri = 
    'mongodb://'
    + config.database.user + ':' + config.database.password + '@'
    + config.database.host  + ':' + config.database.port + '/' + config.database.dbname;
global.db = mongoose.createConnection(uri);

server.use(restify.acceptParser(server.acceptable));
server.use(restify.authorizationParser());
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.urlEncodedBodyParser());

server.use(function slowHandler(req, res, next) {
  setTimeout(function() {
    return next();
  }, 250);
});

var router = require('./router')(server);

server.listen(config.port, function() {
  console.log('Server listening: %s', server.url);
});

/*
// usuario de mongodb
{ user: "app",
  pwd: "123",
  roles: [
    { role: "readWrite", db: "db-couple-life" }
  ]
}

--repair
*/