const express = require('express');
// npm i morgan para instalar morgan y ver datos en consola
const logger = require('morgan');
// npm i cors para instalar cors, para que no de problemas
const cors = require('cors');
// se instala npm i express-session
const session = require('express-session');
// se instala npm i cookie-parser
const cookie = require('cookie-parser')
require('dotenv').config();
const app = express();

// app.use(express.json()); habilita que se puedan mandar objetos a travez de las rutas
app.use(express.json());
app.use(logger("dev"));
app.use(cors());
app.use(cookie());
app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true
}))



const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const userRouter = require('./routes/user');
const {connect} = require('./dataBase/db')


app.use('/', indexRouter);
app.use('/api/v1', apiRouter);
app.use('/user/v1', userRouter);
connect()

//exportamos la constante app para que se pueda usar dentro de server.js
module.exports = app


