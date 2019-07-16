/**
 * Controller: Usuario
 * @author: Maicol Felipe Duque Urrea   <maicolduque01@gmail.com
 */


 const Usuario = require("./usuario.model")


 // Gets a list of students
function index(req, res) {
  return Usuario.find().exec()
    .then(resp => {
      res.render("ver-cursos", {
        cursos: resp,
        cursosDisponibles: cursosDisponibles(resp)
      })
    })
    .catch(handleError(res));
}


// Create student
function create(req, res) {
  let newUsuario = {
    documento   : req.body.documento,
    nombre      : req.body.nombre,
    correo      : req.body.correo,
    telefono    : req.body.telefono,
    rol         : req.body.rol,
  }

  console.log(newUsuario)

  //Agregar nuevo usuario 
  Usuario.create(newUsuario)
  .then(user => {
    res.render("agregar-curso", {
      curso: true,
      mensajeOk: "Usuario registrado correctamente!",
      mensajeFail: "Ya se encuentra registrado en este curso"
    })
    console.log("SI:",user)
  })
  .catch(resp => {
    handleError(res, resp)
  });
    // .then(respondWithResult(res, 201))
    // .catch(handleError(res));
}


// Create student
function showRegistrationForm(req, res) {    
    res.render('registrar');	
}




function cursosDisponibles(cursos){
  return cursos.filter(curso => curso.estado == 'disponible');
}

function handleError(res,resp, code) {
  const statusCode = code || 500;  
    res.render("error", {
      mensaje: resp
    })  
}

module.exports = {
  index,
  create,
  showRegistrationForm
}