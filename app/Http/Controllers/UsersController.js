'use strict'

const User = use('App/Model/User')
const Hash = use('Hash')

class UsersController {
    
    * register (request, response) {
        yield response.sendView('users.signin')
    }
    
    * doRegister (request, response) {
        const user = new User()
        user.username = request.input('username')
        user.email = request.input('email')
        user.password = yield Hash.make(request.input('password'))
        yield user.save()
        var registerMessage = {
            success: 'Registration Successful! Now go ahead and login'
        }
        yield response.sendView('users.register', { registerMessage : registerMessage })
    }

    * login (request, response) {
        const email = request.input('email')
        const password = (request.input('password'))
        const login = yield request.auth.attempt(email, password) 
        
        if (login) {
            response.send('Logged In Successfully')
            return
        }

        response.unauthorized('Invalid credentails')
    }

    * profile (request, response) {
        const user = yield request.auth.getUser()
        if (user) {
            response.ok(user)
            return
        }
        response.unauthorized('You must login to view your profile')
    }
    
    * pruebas (request, response) {
        const users = yield User.all()
        yield response.sendView('users', { users: users.toJSON() })
        //yield response.send('hola mundo')
    }

}

module.exports = UsersController
