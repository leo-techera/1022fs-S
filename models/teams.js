
// ESQUEMA
const {Schema , model} = require('mongoose');
const schema = new Schema({
    nombre:{
        // ponemos el tipo de atributo de nombre
        type: String,
        // required true significa que éste es obligatorio que viaje
        required: true
    },
    ciudad:{
        type: String,
        required: true
    },
    cantidadDeTorneosGanados:{
        type: Number,
        required: true
    },
    alias:{
        type: String,
        // que no tenga required: true significa que puede viajar con el alias o no
    },
    categoria:{
        type: String,
        required: true
    }
})
// le ponemos un nombre al modelo y le asignamos un schema en cuestion
const Team = model('Team' , schema);
module.exports = { Team }



// "nombre":"Real Madrid",
// "ciudad":"Madrid España",
// "cantidadDeTorneosGanados": 35,
// "alias":"Merengues",
// "categoria":"A"