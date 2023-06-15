const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth')
const checksLogin = require('../middlewares/checksLogin');
const {validarChecks}= require('../middlewares/validarChecks');
const validatToken = require('../middlewares/validarToken')

router.get('/session', userController.ejemploSession)
router.get('/probarsession',auth, userController.probarSession)
router.get('cerrar', userController.borrarSession)
router.get('/hash', userController.probarHash)

router.post('/login',checksLogin, validarChecks, userController.login)
router.delete('/logout', userController.logout)

// jwt
router.get('/probartoken', userController.crearToken)
router.get('/testtoken',validatToken, userController.testToken)
router.post('/logintoken',checksLogin,validarChecks,userController.loginToken)

module.exports = router 


