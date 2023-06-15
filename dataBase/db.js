  // npm i mongoose para instalar la libreria de mongodb y usar la base de datos
const mongoose = require('mongoose');
mongoose.set('strictQuery' , false);
require('dotenv').config();

// funcion para conectar la base de datos con el servidor
const connect = async () => {
    try {
        // instalamos npm i dotenv para guardar variables de entorno y ocultar información
await mongoose.connect(process.env.MONGO_CNN);
        console.log('Base de datos conectada')
    } catch (error) {
        console.log('No se pudo conectar')
    }

}


module.exports = {connect}