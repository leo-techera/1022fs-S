// constante para llamar a express validator -- check es una funcion para validar campos 
const {check}= require('express-validator')

const checks = [
    check('nombre')
        .notEmpty().withMessage('el campo nombre es obligatorio')
        .isString().withMessage('el campo nombre debe ser un string'),
    check('ciudad')
        .notEmpty().withMessage('el campo ciudad es obligatorio')
        .isString().withMessage('el campo ciudad debe ser un string'),
    check('cantidadDeTorneosGanados')
        .notEmpty().withMessage('el campo cantidadDeTorneosGanados es obligatorio')
        .isNumeric().withMessage('el campo cantidadDeTorneosGanados debe ser un string'),
    check('alias')
        .notEmpty().withMessage('el campo alias es obligatorio')
        .isString().withMessage('el campo alias debe ser un string'),
    check('categoria')
        .notEmpty().withMessage('el campo categoria es obligatorio')
        .isString().withMessage('el categoria alias debe ser un string'),
]

module.exports = checks