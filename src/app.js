const express = require('express')
const path = require("path");
const app = express()
const hbs = require("hbs");
require("./helpers");

const directorioPublico = path.join(__dirname, "../public" )
const directorioPublicoPartials = path.join(__dirname, "../partials" );
app.use(express.static(directorioPublico))

hbs.registerPartials(directorioPublicoPartials);

app.set("view engine", 'hbs');


app.get("/", (req, res) => {
  res.render("index", {
    estudiante: 'MAICOL'
  })
})
 
app.get("/calculos", (req, res) => {

  console.log("=>",req.query);

  res.render("calculos", {
    estudiante: req.query.nombre,
    nota1: parseInt(req.query.nota1),
    nota2: parseInt(req.query.nota2),
    nota3: parseInt(req.query.nota3)
  })
})


app.listen(3000, () => {
  console.log("Escuchando puerto 3000 ");
})

