/**
 * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 */

 const estudiantes = require("../services/estudiante");
 const cursos      = require("../services/curso");

 module.exports = (app) => {

  app.use("",estudiantes);
  app.use("",cursos);

  app.get('/', (req, res ) => {
    res.render('index', {
      titulo: 'Inicio'		
    })	
  });

  app.post('/', (req, res ) => {

    res.render('indexpost', {
      titulo: 'Inicio',
      nombre: req.body.usuario		
    })	
  });

  app.post('/calculos', (req, res ) => {
    res.render('calculos', {
      titulo: 'Calcular Promedio',
      estudiante : {	
          nombre: req.body.nombre,
          matematicas: parseInt(req.body.matematicas),
          ingles: parseInt(req.body.ingles),
          programacion: parseInt(req.body.programacion)
      }	
    })	
  });

  // app.get('/listado', (req, res ) => {
  //   res.render('listado', {
  //     titulo: 'Listado de Estudiantes'		
  //   })	
  // });

  app.get('/actualizar', (req, res ) => {
    res.render('actualizar', {
      titulo: 'Actualizar un Curso'		
    })	
  });

  app.post('/actualizar', (req, res ) => {
    res.render('actualizarPost', {
      titulo: 'Actualizar un Curso',
      nombre: req.body.nombre,
      asignatura: req.body.asignatura,
      nota: parseInt(req.body.nota)
    })	
  });


  app.get('*',(req,res)=> {
    res.render('error', {
      titulo: "Error 404"
    })
  });


 }