const express = require('express')
const path = require("path");
const app = express()
const hbs = require("hbs");


const directorioPublico = path.join(__dirname, "../public" )
app.use(express.static(directorioPublico))

app.set("view engine", 'hbs');


app.get("/", (req, res) => {
  res.render("index", {
    estudiante: 'MAICOL'
  })
})
 
app.get("/calculos", (req, res) => {
  res.render("calculos", {
    estudiante: 'MAICOL DUQUE'
  })
})


app.listen(3000, () => {
  console.log("Escuchando puerto 3000 ");
})

