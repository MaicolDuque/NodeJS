/**
 * Routes: Estudiante
 * @author: Maicol Felipe Duque Urrea   <maicolduque01@gmail.com
 */

const { Router } = require('express');
const controller = require("./curso.controller");

const router = new Router();

router.get('/listado', (req, res ) => {
  res.render('listado', {
    titulo: 'Listado de Estudiantes'		
  })	
});

router.post("/agregar-curso", controller.create);
router.get("/ver-cursos", controller.index);
router.get("/curso", controller.show);
router.get("/inscribir-curso", controller.coursesAvailable);
router.post("/agregar-usuario-curso", controller.agregarUsuarioCurso)
router.get("/actualizar", controller.updateState);
router.get("/ver-inscritos", controller.seeSuscribed);
router.get("/eliminar-usuario", controller.deleteUserCourse);
 

module.exports = router;
