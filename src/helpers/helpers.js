const hbs = require("hbs");

hbs.registerHelper("obtenerPromedio", (nota1, nota2, nota3) => {
  return (nota1+nota2+nota3)/3;
})


hbs.registerHelper("estadoCurso", (id, estado) => {
 if(estado == "disponible"){
   return `<a title="Cerrar" href="/actualizar?id=${id}&estado=cerrado" style="cursor:pointer;"><svg  style="width:10%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"/></svg></a>`;
  }
  return `<a title="Abrir" style="cursor:pointer;" href="/actualizar?id=${id}&estado=disponible" ><svg tittle="Abrir" style="width:10%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></a>`;
})



hbs.registerHelper("listarUsuariosCurso", (usuarios, id) => {
   let texto = "";
   usuarios.map(usuario => {
     texto += `<tr>               
               <th scope="row">${ usuario.documento }</th>
               <td>${ usuario.nombre }</td>
               <td>${ usuario.correo }</td>
               <td>${ usuario.telefono }</td>              
               <td>
                 <a href="/eliminar-usuario?documento=${usuario.documento}&idcurso=${id}">Eliminar</a>
               </td>
             </tr>
      `;
   })   
    
   return texto;    
//  }

})