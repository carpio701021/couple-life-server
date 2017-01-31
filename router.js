/**
 * server router for all requests
 * **/
var usersController = require('./controllers/usersController');

module.exports = function (server){
    
    server.get(
        { path : '/' , name : 'index' }
        , usersController.show
    );
    
    server.get(
        { path: '/users' , name: 'users-index' }
        , usersController.show
    );
    
    server.get(
        { path: '/users/newUser/:name/:email/:password' , name: 'NewUser' }
        , usersController.create
    );
    
    

    server.get(
        { path: '/users/hello/:name' , name: 'SayHello' }, 
        function respond(req, res, next) {
                res.send({
                    hola: "hola mundo de " + req.params.name
                });
            return next();
    });
    
    
};