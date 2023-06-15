const {check}= require('express-validator')

const checksLogin = [
    check('email')
        .notEmpty().withMessage('el campo email es obligatorio')
        .isString().withMessage('el campo email debe ser un string')
        .isEmail().withMessage('el texto enviado debe ser un email'),
    check('password')
        .notEmpty().withMessage('el campo password es obligatorio')
        .isString().withMessage('el campo password debe ser un string'),
]

module.exports = checksLogin