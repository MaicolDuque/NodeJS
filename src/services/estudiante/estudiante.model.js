/**
 * @author: Maicol Felipe Duque Urrea   <maicolduque01@gmail.com
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;


const EstudianteSchema =  new Schema({
  nombre:       {type: String, required: true },
  matematicas:  {type: Number},
  ingles:       {type: Number},
  programacion: {type: Number}
})

const Estudiante = mongoose.model('Estudiante', EstudianteSchema)

module.exports = Estudiante