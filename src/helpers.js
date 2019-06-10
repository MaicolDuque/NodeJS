const hbs = require("hbs");

hbs.registerHelper("obtenerPromedio", (nota1, nota2, nota3) => {
  return (nota1+nota2+nota3)/3;
})

hbs.registerHelper("listar", () => {
  let listaEstdiantes = require("./listado.json");
  
  let texto = '<table><tr><td>Nombre</td></tr>'
  listaEstdiantes.map(est => {
    texto += `<tr><td>     
       ${est.nombre}
     </td></tr>
     `;
  })

  texto += "</table>";

  return texto;
})