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

module.exports = usersController;