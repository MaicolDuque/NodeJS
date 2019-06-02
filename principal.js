const {cursos, opciones} = require("./datos");
const express = require('express')
const app = express()
const fs = require('fs');
const argv = require("yargs")
            .command('inscribir', 'Incribirme en un curso', opciones)
            .argv

let mostrarCursos = () =>{
  cursos.map( ({id,nombre,duracion,valor}, i) => {
    setTimeout(()=>{
      console.log(`>  Nombre del curso: ${nombre}
      Id curso: ${id}
      Duracion curso: ${duracion}
      Valor curso: ${valor}
      `);
    },2000*(i+1))
  })
}


if(argv.id){
  let cursoById = cursos.find(curso => curso.id == argv.id);
  if(cursoById){
    let {nombre, duracion, valor }= cursoById;    
    texto = ` > El estudiante: ${argv.nombre}, con cédula ${argv.cedula}
  se ha matriculado en el curso ${nombre}, tiene una duracion de ${duracion} y un costo de ${valor}.`;
  
    // fs.writeFile('matricula.txt', texto, (err)=>{
    //   if(err) throw(err);
    //   console.log("Se ha creado el archivo...");
    // }) 
        
    app.get('/', function (req, res) {
      res.send(texto)
      console.log("Se imprimió resultado en: http://localhost:3000/");
    })
  }else{
    console.log("Ha ingresado un ID que no corresponde a ningún curso.");
    mostrarCursos();
  }

}else{
  mostrarCursos();
}


 
app.listen(3000)