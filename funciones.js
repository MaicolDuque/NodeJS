const fs = require("fs")

let listadoEstudiantes = [];

const crear = ({nombre,matematicas,ingles,programacion}) => {
  listar();
  let est = {
    nombre,
    matematicas,
    ingles,
    programacion
  }

  let duplicado = listadoEstudiantes.find(est => est.nombre == nombre);
  if(!duplicado){
    listadoEstudiantes.push(est);
    guardar();
  }else{
    console.log("El usuario con ese nombre ya existe!!");
  }
  
  
}

const listar = () => {
  try{
    listadoEstudiantes = require("./listado.json");
  }catch(e){
    listadoEstudiantes = [];
  }

}

const mostrar = () =>{
  listar();
  listadoEstudiantes.map(est => {
    console.log(est.nombre) 
  })
}

const mostrarEstudiante = (nombreEstudiante) => {
  listar();
  let estuduiante = listadoEstudiantes.filter(est => est.nombre == nombreEstudiante)
  if(!estuduiante){
    console.log("No existe!");
  }else{
    console.log(estuduiante);
  }
  
}

const guardar = () => {
  let datos = JSON.stringify(listadoEstudiantes);
  fs.writeFile("listado.json", datos, (err)=>{
    if(err) throw (err)
    console.log("Archivo creado con éxito");
  })
}

const actualizar = (nom, asigntura, calificacion) => {
  listar();
  console.log("BEFORE", listadoEstudiantes)
  let encontrado = listadoEstudiantes.find(buscar => buscar.nombre == nom);
  console.log("ENCONTRADO=>",encontrado)
  if(encontrado){
    encontrado[asigntura] = calificacion;
    guardar();
  }else{
    console.log("Estudiante no existe!");
  }

  console.log("AFTER", listadoEstudiantes)
}


const eliminar = (nom) => {
  listar();
  let indexEstudiante = listadoEstudiantes.findIndex(est => est.nombre == nom);
  listadoEstudiantes.splice(indexEstudiante,1);
  guardar();
}
module.exports = {
  crear,
  mostrar,
  mostrarEstudiante,
  actualizar,
  eliminar
}