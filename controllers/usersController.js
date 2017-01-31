/**
 * Controlloer for users
 * **/

var User = require('../models/user');

var usersController = new Object();

usersController.show = function respond(req, res, next){
    User.getAll(function(err, users){
        if (err)
            res.send({
                result : 'false'
                , message : err
            });
        else
            res.send({
                result: 'true'
                , users : users 
            });
    });
    return next();
};

usersController.create = function respond(req, res, next){
     var NewUser = new User({ 
        username: req.params.name 
        , name: req.params.name + " user" 
        , email: req.params.email
        , password: req.params.password
    });
    
    NewUser.save(function (err) {
      if (err) {
        //console.log(err);
        res.send({
            result : 'false'
            , message : err
        });
      } else {
        //console.log('Exito');
        res.send({
            result : 'true'
        });
      }
    });

    return next();
};

usersController.login = function respond(req, res, next){
    
    //oauth2 https://github.com/domenic/restify-oauth2/blob/master/examples/cc/server.js
    req.username = req.params.email;
    req.password = req.params.password;
    
    var query = User.findOne({ email : req.params.username });

    query.select('password');
    
    query.exec(function (err, user) {
        if (err) return next(err);
        //aqui el login
        if (user.password !== req.authorization.basic.password)
            return next(new restify.NotAuthorizedError());
        
        res.send({
            result: 'true'
            , auth : req.authorization 
        });
    })
    

    return next();
};


usersController.logout = function respond(req, res, next){
    
};


usersController.home = function respond(req, res, next){
    res.send({
        result: 'true'
        , auth : req.authorization 
    });
    return next();
};


module.exports = usersController;