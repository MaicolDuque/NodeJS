const {cursos, opciones} = require("./datos");
const fs = require('fs');



const argv = require("yargs")
            .command('inscribir', 'Calcular el promedio', opciones)
            .argv

// console.log(argv);
// console.log('Matematicas = '+ argv.matematicas);
// console.log('MAtematicas2 =>'+argv.m);


cursos.map( ({id,nombre,duracion,valor}, i) => {
  setTimeout(()=>{
    console.log(`Nombre del curso: ${nombre}`);
  },2000*i)
})


// let {nombre, edad, notas: {matematicas, ingles, programacion}} = estudiante;
// console.log(estudiante);
// console.log(`El promedio es igual a: ${obtenerPromedio(matematicas, ingles, programacion)}`);

// let crearArchivo = (estudiante) => {
//   texto = `  Nombre estudiante: ${nombre}
//   Promedio estudiante: ${obtenerPromedio(matematicas, ingles, programacion)}`;
  
//   fs.writeFile('promedio.txt', texto, (err)=>{
//     if(err) throw(err);
//     console.log("Se ha creado el archivo...");
//   })    
  
// }

// crearArchivo(estudiante);