/**
 * @author: Maicol Felipe Duque Urrea   <maicolduque01@gmail.com
 */

const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');


mongoose.set('useCreateIndex', true);
const {Schema} = mongoose;
// const Usuario = require("../usuario/usuario.model");
const UsuarioSchema = new Schema({
  documento: {type:String, unique: true},
  nombre:    String,
  correo:    String,
  telefono:  String,
  rol:       String
})


const CursoSchema =  new Schema({
  nombre:       {type: String, required: true },
  id:           {type: Number},
  modalidad:    {type: String},
  valor:        {type: String},
  descripcion:  {type: String},
  intensidad:   {type: String},
  estado:       {type: String},
  usuarios:     [UsuarioSchema]
})

CursoSchema.plugin(uniqueValidator, { message: 'Error, el campo {PATH} debe ser único.' });
const Curso = mongoose.model('Curso', CursoSchema)

module.exports = Curso