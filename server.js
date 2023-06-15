const app = require('./app');
// buena practica meter en server otra variable dotenv
require('dotenv').config();

//establecemos un puerto
const port = process.env.PORT || 3000;

//listen va a levantar un servidor
//se usa node server.js en lugar de node app.js
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })



  // npm i mongoose para instalar la libreria de mongodb y usar la base de datos