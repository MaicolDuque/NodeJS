/**
 * Controller: Estudiante
 * @author: Maicol Felipe Duque Urrea   <maicolduque01@gmail.com
 */


 const Estudiante = require("./estudiante.model")


 // Gets a list of students
function index(req, res) {
  return Estudiante.find().exec()
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
  return Estudiante.create(req.body)
    .then(resp => {
      let newEstudiante = {	
        nombre: req.body.nombre,
        matematicas: parseInt(req.body.matematicas),
        ingles: parseInt(req.body.ingles),
        programacion: parseInt(req.body.programacion)
      }
            
      res.render('calculos', {
        titulo: 'Calcular Promedio',
        estudiante: newEstudiante
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