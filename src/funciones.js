const fs = require("fs");

let listadoCursos = [];
let listadoUsuarios = [];

const listar = () => {
  try{
    listadoCursos = require("../cursos.json");
  }catch(e){
    listadoCursos = [];
  }
}


const listarUsuarios = () => {
  try{
    listadoUsuarios = require("../usuarios.json");
  }catch(e){
    listadoUsuarios = [];
  }
}


const mostrar = () =>{
  listar();
  return listadoCursos;
}


const guardar = () => {
  let datos = JSON.stringify(listadoCursos);
  console.log("datos", datos);
  fs.writeFile("cursos.json", datos, (err)=>{
    if(err) throw (err)
    console.log("Archivo creado con éxito");
  })
}


const guardarUsuario = () => {
  let datos = JSON.stringify(listadoUsuarios);
  console.log("datos", datos);
  fs.writeFile("usuarios.json", datos, (err)=>{
    if(err) throw (err)
    console.log("Archivo creado con éxito");
  })
}


const actualizarEstado = (id, state) => {
  listar();
  let curso = listadoCursos.find(cur => cur.id == id);
  console.log("Curso:", curso)
  if(curso){
    curso.estado = state;
    guardar();
  }
}


const cursosDisponibles = () => {
  listar();
  return listadoCursos.filter(curso => curso.estado == 'disponible');
}


const agregarCurso = (curso) => {
  console.log("Info=>", curso.nombre);

  listar();
  let cursoNew = {
    nombre      : curso.nombre,
    id          : curso.id,
    modalidad   : curso.modalidad,
    valor       : curso.valor,
    descripcion : curso.descripcion,
    intensidad  : curso.intensidad,
    estado      : curso.estado,
    usuarios    : []
  }

  let existe = listadoCursos.find(cur => cur.id == curso.id);

  console.log(existe)
  if(!existe){
    listadoCursos.push(cursoNew);
    guardar();
    return true;
  }
  return false;
}


const agregarUsuarioCurso = (usuario) => {
  listarUsuarios();

  let newUsuario = {
    documento   : usuario.documento,
    nombre      : usuario.nombre,
    correo      : usuario.correo,
    telefono    : usuario.telefono,
    rol         : usuario.rol,
  }

  let existe = listadoUsuarios.find(user => user.documento == usuario.documento);

  //Agregar usuario
  if(!existe){
    listadoUsuarios.push(newUsuario);
    guardarUsuario();
  }


  listar();
  let cursoUsuario = listadoCursos.find(curso => curso.id == usuario.curso);
  let usuarios = cursoUsuario.usuarios.find(user => user.documento == usuario.documento)
  //Agregar usuario a curso
  if(!usuarios){
    cursoUsuario.usuarios.push(newUsuario);
    guardar();
    return true;
  }
  return false;
}


const eliminarUsuarioCurso = (idcurso, documento) => {
  listar();
  let curso = listadoCursos.find(cu => cu.id == idcurso);
  let usuariosCurso = curso.usuarios;

  let indexUsuario = usuariosCurso.findIndex(usuario => usuario.documento = documento);
  usuariosCurso.splice(indexUsuario,1);
  guardar();
}


module.exports = {
  agregarCurso,
  mostrar,
  actualizarEstado,
  cursosDisponibles,
  agregarUsuarioCurso,
  eliminarUsuarioCurso
}



//https://antsanchez-dev.blogspot.com/2017/05/handlebarjs-referencia-basica.html


/*

const fs = require("fs")

let listadoEstudiantes = [];




const crear = ({nombre,matematicas,ingles,programacion}) => {
  
  
  
}

const listar = () => {
  try{
    listadoEstudiantes = require("./listado.json");
  }catch(e){
    listadoEstudiantes = [];
  }

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
}*/