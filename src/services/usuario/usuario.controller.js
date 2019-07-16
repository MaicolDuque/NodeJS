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
  return Usuario.create(req.body)
    .then(resp => {       
      res.render('calculos', {
        titulo: 'Calcular Promedio',
        Usuario: newUsuario
      })	
    })
    .catch(res);
    // .then(respondWithResult(res, 201))
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
  create
}