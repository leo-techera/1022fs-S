const jwt = require('jsonwebtoken')
const {User} = require('../models/user')
require('dotenv').config()



module.exports = validatToken = async (req,res,next )=>{
    const token = req.header('JWToken')
    if (!token) {
        res.status(401).json({
            msg: "no hay token en la peticion"
        })
    }
    try {
        const {body} = jwt.verify(token,process.env.SECRET_TOKEN)
        const user = await User.findById(body.id)
        if (!user) {
            res.status(401).json({
                msg: "token invalido - db",
            })
        }
        next()
    } catch (error) {
        res.status(401).json({
            msg: "token invalido",
            error
        })
    }
}