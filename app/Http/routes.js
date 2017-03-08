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
Route.on('/register').render('users.register')
//Route.get('signin', 'UsersController.signin')

Route.post('register', 'UsersController.doRegister')

Route.get('pruebas', 'UsersController.pruebas')