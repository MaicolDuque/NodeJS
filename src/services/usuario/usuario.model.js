/**
 * @author: Maicol Felipe Duque Urrea   <maicolduque01@gmail.com
 */

const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

mongoose.set('useCreateIndex', true);  
const {Schema} = mongoose;


const UsuarioSchema = new Schema({
  documento: {type:String, unique: true},
  nombre:    String,
  correo:    String,
  telefono:  String,
  rol:       String
})

UsuarioSchema.plugin(uniqueValidator, { message: 'Error, el campo {PATH} debe ser único.' });
const Usuario = mongoose.model('Usuario', UsuarioSchema)

module.exports = Usuario