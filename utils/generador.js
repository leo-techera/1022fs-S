// instalamos jwt npm i jsonwebtoken
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = generadorToken = (body) => {
    const payload = {body}
    // jwt.sign es el metodo que escriben los tokens
                //  si no se le pasa un secret, cua,quier persona podria leer nuestros tokens
    return jwt.sign(payload,process.env.SECRET_TOKEN,{
        // dicho token expira en 4 horas
        expiresIn: '4h'
    })
}