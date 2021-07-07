const mongoose = require('mongoose');

const HeroeSchema = mongoose.Schema({
    nombre: {type:String, require:true},
    heroe: {type:String, require:true},
    poder: {type:String, require:true},
    debilidad: {type:String, require:true},
    edad: {type:Number, require:true},
    foto: {type:String, require:true},
    descripcion: {type:String, require:true},
    fechacreacion: {type:Date, default: Date.now()}
})


module.exports = mongoose.model('Heroe', HeroeSchema);