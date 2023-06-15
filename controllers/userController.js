// se instala libreria npm i bcryptjs 
const bcrypt = require('bcryptjs')
const {User} = require('../models/user')
const generadorToken = require('../utils/generador')

class UserController{
    ejemploSession(req, res){
        const user = {
            nombre: "Juan",
            edad: 22
        }
        req.session.user= user
                                           //maxAge hace que la cookie tenga un tiempo de vida x
        res.cookie("miPrimeraCookie", user.nombre,{maxAge: 120000})
        res.json(req.session)
    }
    probarSession (req, res){
        res.json({session: req.session, cookie: req.cookies.sessionDelUsuario})
    }
    borrarSession(){
        req.session.destroy()
        res.json({msg: "session cerrada"})
    }
    probarHash (req, res){
        let contraseña = "123456789"
        let salt = bcrypt.genSaltSync(15)
        let hash = bcrypt.hashSync(contraseña,salt)
        let comparacion1 = bcrypt.compareSync(contraseña, hash)
        let comparacion2 = bcrypt.compareSync("Hola", hash)

        res.json({hash, comparacion1, comparacion2})
    }
    async login(req,res){
        try {
            // cuando le paso el mail de una persona, busca esa persona en la base de datos
            const persona = await User.findOne({email: req.body.email})
            if (persona == null) {
                // si no la encuentra sale mensaje
                res.json({msg: "la contraseña o el email es invalido"})
            }
            if (!bcrypt.compareSync(req.body.password, persona.password)) {
                res.json({msg: "la contraseña o el email es invalido"})
            }
            const user = {
                _id: persona._id,
                name: persona.name
            }
            // genera una sesion y la guarda en una cookie
            req.session.user = user
            if (req.body.remember) {
                res.cookie('sessionDelUsuario', req.session.user, {maxAge:120000})
            }
            res.json({
                msg: "se creó la session"
            })
        } catch (error) {
            res.json(error)
        }
    }
    logout(req,res){
        res.clearCookie('sessionDelUsuario')
        req.session.destroy()
        res.json({
            msg: "session cerrada"
        })
    }
    crearToken (req, res){
        const token = generadorToken(req.body)
        res.json(token)
    }
    testToken (req, res){
        res.json({msg:"paso el token"})
    }
    async loginToken (req,res){
        try {
            const persona = await User.findOne({email: req.body.email})
            if (persona == null) {
                res.json({msg: "la contraseña o el email es invalido"})
            }
            if (!bcrypt.compareSync(req.body.password, persona.password)) {
                res.json({msg: "la contraseña o el email es invalido"})
            }
            const token = generadorToken({id: persona._id,email: persona.email})
            
            res.json({
                msg: "se creó la session",
                token
            })
        } catch (error) {
            res.json(error)
        }
    }


}

module.exports = new UserController