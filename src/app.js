const express = require('express')
const path = require("path");
const app = express()
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
 
app.post("/calculos", (req, res) => {

  console.log("=>",req.body);

  res.render("calculos", {
    estudiante: req.body.nombre,
    nota1: parseInt(req.body.nota1),
    nota2: parseInt(req.body.nota2),
    nota3: parseInt(req.body.nota3)
  })
})


app.listen(3000, () => {
  console.log("Escuchando puerto 3000 ");
})

app.get("*", (req, res) => {
  res.render("error", {
    estudiante: "error"
  });
});

