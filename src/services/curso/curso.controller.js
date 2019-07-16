/**
 * Controller: Curso
 * @author: Maicol Felipe Duque Urrea   <maicolduque01@gmail.com
 */


const Curso = require("./curso.model")
const Usuario = require("../usuario/usuario.model");


 // Gets a list of students
function index(req, res) {
  return Curso.find().exec()
    .then(resp => {
      res.render("ver-cursos", {
        cursos: resp,
        cursosDisponibles: cursosDisponibles(resp)
      })
    })
    .catch(handleError(res));
}


 // Get one student
 function show(req, res) {   
  return Curso.find({'id': req.query.id}).exec()
    .then(resp => {
      res.send(resp)
    })
    .catch(handleError(res));
}


// Create Course
function create(req, res) {
  Curso.findById(req.id).exec()
  .then(existe => {         
    let creoCurso = false;
    console.log(existe)
    if(!existe){
      creoCurso = true;
      return Curso.create(req.body)
        .then(resp => {       
          res.render("agregar-curso", {
            curso: creoCurso,
            mensajeOk: "Curso creado exitosamente!",
            mensajeFail: "Ya existe un curso con este ID"
          }) 
        })
        .catch(res);
    }

  });
    
}


function updateState(req, res){
  let id = req.query.id;
  let state = req.query.estado;
  Curso.update({id: id}, {estado: state})
  .then(course => {
    console.log("updated: ", course)
  })
  // funciones.actualizarEstado(id, state);
  res.redirect("/ver-cursos");
}


function seeSuscribed(req, res) { 
  return Curso.find().exec()
    .then(resp => {
      res.render("ver-inscritos", {
        cursosDisponibles: cursosDisponibles(resp),
        eliminar: false
      })
    })
    .catch(handleError(res));
}



// Return courses available
function coursesAvailable (req, res){
  return Curso.find()
  .exec()
    .then(resp => {
      res.render("inscribir-curso", {       
        cursosDisponibles: cursosDisponibles(resp)
      })
    })
    .catch(handleError(res));
}


//Add user in course
function agregarUsuarioCurso(req, res){

  let newUsuario = {
    documento   : req.body.documento,
    nombre      : req.body.nombre,
    correo      : req.body.correo,
    telefono    : req.body.telefono,
    rol         : req.body.rol,
  }

  //Agregar nuevo usuario 
  Usuario.create(newUsuario)
  .then(user => {
    console.log("User:", user)    
  })
  // .catch(handleError(res));


  //Agregar usuario a un  curso
  let usuarioCurso = false;
  Curso.update(
    {id: req.body.curso, 'usuarios.documento': {$ne: req.body.documento }},
    {$push: { usuarios: newUsuario}}
  )
  .then(course => {
    console.log("Aca=>",course);

    if(course.nModified){
      usuarioCurso = true;
    }
    res.render("agregar-curso", {
      curso: usuarioCurso,
      mensajeOk: "Usuario registrado en el curso correctamente!",
      mensajeFail: "Ya se encuentra registrado en este curso"
    })

  })
  // .catch(handleError(res));

 

}


function cursosDisponibles(cursos){
  return cursos.filter(curso => curso.estado == 'disponible');
}

function handleError(res, code) {
  const statusCode = code || 500;
  return (err) => {
    res.status(statusCode).send(err);
  };
}

module.exports = {
  index,
  create,
  coursesAvailable,
  agregarUsuarioCurso,
  updateState,
  seeSuscribed,
  show
}