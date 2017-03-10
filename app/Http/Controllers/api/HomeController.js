'use strict'

class HomeController {
    
    * index (request, response) {
        const isLoggedIn = yield request.auth.check()
        yield response.send( { 
            result: 'hola mundo' ,
            auth: isLoggedIn
        })
    }  

}

module.exports = HomeController
