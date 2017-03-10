'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.get('profile', 'UsersController.profile')
Route.on('/login').render('users.login')
Route.post('login', 'UsersController.login')
Route.get('logout', 'UsersController.logout')
Route.on('/register').render('users.register')
//Route.get('signin', 'UsersController.signin')

Route.post('register', 'UsersController.doRegister')

Route.get('pruebas', 'UsersController.pruebas')


// ------------------->>> Api routes:

Route.group('api', function () {
    
    Route.get('pruebas', 'api/UsersController.pruebas')

    Route.get('/', 'api/UsersController.index')
    Route.get('home', 'api/HomeController.index')
    
    Route.post('login', 'api/UsersController.login')
    Route.post('register', 'api/UsersController.doRegister')
    

}).prefix('api')

Route.group('api-auth', function () {
    
    Route.get('profile', 'api/UsersController.profile')
    Route.get('relationship', 'api/Relationship')
    Route.get('events', 'api/UsersController.profile')
        
}).prefix('api').middleware('auth:api')