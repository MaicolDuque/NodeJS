// const express = require('express')
// const app = express()

// app.use(express.static(__dirname + "/public"))
 
// app.listen(3000)

const {argv} = require("./yargs")
const funciones = require("./funciones");

let comando = argv._[0];

switch(comando){
  case 'crear':
    funciones.crear();
    break;
  case 'mostrar': 
    funciones.mostrar();
    break;
  case 'mostrar_est': 
    funciones.mostrarEstudiante(argv.nombre);
    break;
  case 'eliminar': 
    funciones.eliminar(argv.nombre);
    break;
  case 'actualizar': 
    funciones.actualizar(argv.nombre, argv.asignatura, argv.calificacion);
    break;
  default:
    console.log("No se ingresó una función válida");
}