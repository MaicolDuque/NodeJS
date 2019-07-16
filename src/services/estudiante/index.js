/**
 * Routes: Estudiante
 * @author: Maicol Felipe Duque Urrea   <maicolduque01@gmail.com
 */

const { Router } = require('express');
const controller = require("./estudiante.controller");

const router = new Router();

router.get('/listado', (req, res ) => {
  res.render('listado', {
    titulo: 'Listado de Estudiantes'		
  })	
});


router.post('/calculos', controller.create);

module.exports = router;
