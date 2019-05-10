const {estudiante, obtenerPromedio} = require("./estudiante");
const fs = require('fs');

let {nombre, edad, notas: {matematicas, ingles, programacion}} = estudiante;
console.log(estudiante);
console.log(`El promedio es igual a: ${obtenerPromedio(matematicas, ingles, programacion)}`);

let crearArchivo = (estudiante) => {
  texto = `  Nombre estudiante: ${nombre}
  Promedio estudiante: ${obtenerPromedio(matematicas, ingles, programacion)}`;
  
  fs.writeFile('promedio.txt', texto, (err)=>{
    if(err) throw(err);
    console.log("Se ha creado el archivo...");
  })    
  
}

crearArchivo(estudiante);