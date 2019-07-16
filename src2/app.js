const express = require('express')
const port = process.env.PORT || 3000;
const path = require("path");
const app = express()
const funciones = require("./funciones");
const hbs = require("hbs");
require("./helpers");
const bodyParser = require("body-parser");

const directorioPublico = path.join(__dirname, "../public" )
const directorioPublicoPartials = path.join(__dirname, "../partials" );
app.use(express.static(directorioPublico))
app.use(bodyParser.urlencoded({extended: false}))



hbs.registerPartials(directorioPublicoPartials);
app.set("view engine", 'hbs');


app.get("/", (req, res) => {
  res.render("index", {
    estudiante: 'MAICOL'
  })
})




app.get("/ver-cursos", (req, res) => {
  res.render("ver-cursos", {
    cursos: funciones.mostrar(),
    cursosDisponibles: funciones.cursosDisponibles()
  })
})


app.get("/ver-inscritos", (req, res) => {

  res.render("ver-inscritos", {
    cursosDisponibles: funciones.cursosDisponibles(),
    eliminar: false
  })
})

app.get("/actualizar", (req, res) => {
  let id = req.query.id;
  let state = req.query.estado;
 
  funciones.actualizarEstado(id, state);
  res.redirect("/ver-cursos");
  
})


app.get("/eliminar-usuario", (req, res) => {
  let idcurso = req.query.idcurso;
  let documento = req.query.documento;
  funciones.eliminarUsuarioCurso(idcurso, documento);
  res.render("ver-inscritos", {
    cursosDisponibles: funciones.cursosDisponibles(),
    eliminar: true
  })
  
})
 
app.post("/agregar-curso", (req, res) => {
  const creoCurso = funciones.agregarCurso(req.body);
  res.render("agregar-curso", {
    curso: creoCurso,
    mensajeOk: "Curso creado exitosamente!",
    mensajeFail: "Ya existe un curso con este ID"
  })
})



app.get("*", (req, res) => {
  res.render("error", {
    estudiante: "error"
  });
});


app.listen(port, () => {
  console.log(`Escuchando puerto ${port}`);
})