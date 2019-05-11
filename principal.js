const {cursos, opciones} = require("./datos");
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
    },2000*i)
  })
}


if(argv.id){
  let cursoById = cursos.find(curso => curso.id == argv.id);
  if(cursoById){
    let {nombre, duracion, valor }= cursoById;    
    texto = ` > El estudiante: ${argv.nombre}, con cédula ${argv.cedula}
  se ha matriculado en el curso ${nombre}, tiene una duracion de ${duracion} y un costo de ${valor}.`;
  
    fs.writeFile('matricula.txt', texto, (err)=>{
      if(err) throw(err);
      console.log("Se ha creado el archivo...");
    })        
  }else{
    console.log("Ha ingresado un ID que no corresponde a ningún curso.");
    mostrarCursos();
  }

}else{
  mostrarCursos();
}


