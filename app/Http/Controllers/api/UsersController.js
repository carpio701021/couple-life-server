'use strict'

const User = use('App/Model/User')
const Hash = use('Hash')

class UsersController {
    
    * doRegister (request, response) {
        const user = new User()
        user.username = request.input('username')
        user.email = request.input('email')
        user.password = request.input('password')
        yield user.save()
        var registerMessage = {
            success: 'Registration Successful! Now go ahead and login'
        }
        yield response.created({ registerMessage : registerMessage })
    }

    * login (request, response) {

        const email = request.input('email')
        const password = (request.input('password'))
        
        //con session
        //const login = yield request.auth.attempt(email, password) 

        //con api
        //https://github.com/adonisjs/adonis-rally/blob/develop/app/Repositories/User.js

        try {
            const user = yield User.findBy('email', email)
            const isMatchedPassword = yield Hash.verify(password, user.password)
            if (!isMatchedPassword) {
              throw new Exceptions.ApplicationException('Password mis-match', 400)
            }else{
                const token = yield request.auth.generate(user)
                response.json({
                    message: 'Logged In Successfully',
                    token: token
                })
                return
            }
        } catch (e) {
          response.unauthorized({error: e.message})
        }
        
        response.unauthorized('Invalid credentails')
    }
    
    * logout (request, response) {
        yield request.auth.logout()
        response.redirect('/')
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
        yield response.send( { users: users.toJSON() })
    }

}

module.exports = UsersController
