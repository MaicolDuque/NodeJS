const fs = require ('fs');
let listaEstudiantes = [];

const guardar = () => {
	let data = JSON.stringify(listaEstudiantes);
	fs.writeFile(`src/listado.json`, data , (err) => {
		  	  	if (err) throw (err);
		  		console.log ('se ha creado el archivo');		  	
			});
}

const cargar = () => {
	try {
	  listaEstudiantes = require ('./listado.json');
	
	 } catch(err){
	 	listaEstudiantes =[];
	 }
}

let duplicado = listaEstudiantes.find(nom => nom.nombre == Estudiante.nombre)

const crear = (estudiante) => {
	cargar();	
	// let est = {		
	// 	nombre: estudiante.nombre,
	// 	matematicas: estudiante.nota1,
	// 	ingles: estudiante.nota1,
	// 	programacion: estudiante.nota1		
	// };
	listaEstudiantes.push(estudiante);	
	guardar();	
	return ('estudiante guardado con exito');
}

const promedio = (nom)=>{
	cargar();
	let encontrar = listaEstudiantes.find( buscado =>  buscado.nombre == nom)	
	if (!encontrar){
		return 'No hay estudiante con ese nombre'
	}
	else {		
		let promedio = (encontrar.matematicas + encontrar.ingles + encontrar.programacion) / 3;		
		return `Su promedio es ${promedio} ` 
	}
}

const listar = () => {
listaEstudiantes = require('./listado.json')
	let texto = `<table class='table table-striped table-hover'> 
				<thead class='thead-dark'>
				<th>Nombre</th>
				<th>Matematicas</th>
				<th>Ingles</th>
				<th>Programacion</th>
				</thead>
				<tbody>`;
	listaEstudiantes.forEach(estudiante =>{
		texto = texto + 
				`<tr>
				<td> ${estudiante.nombre} </td>
				<td> ${estudiante.matematicas} </td>
				<td> ${estudiante.ingles}</td>
				<td> ${estudiante.programacion} </td>
				</tr> `;

	})
	texto = texto + '</tbody> </table>';	
	return texto;

}

const listar2 = () => {
listaEstudiantes = require('./listado.json')
	let texto = "<div class='accordion' id='accordionExample'>";
	i = 1;
	listaEstudiantes.forEach(estudiante =>{
		texto = texto + 
				`<div class="card">
					    <div class="card-header" id="heading${i}">
					      <h2 class="mb-0">
					        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
					          ${estudiante.nombre}
					        </button>
					      </h2>
					    </div>

					    <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordionExample">
					      <div class="card-body">
					      	Tiene una nota en matemáticas de ${estudiante.matematicas} <br>
					      	Tiene una nota en matemáticas de ${estudiante.ingles} <br>
					      	Tiene una nota en matemáticas de ${estudiante.programacion} <br>  
					    </div>
					  </div>`				
				i++;
	})
	texto = texto + '</div>';	
	return texto;
}

const actualizar = (nombre, materia, nota) => {
	cargar();		
	let encontrar = listaEstudiantes.find( est =>  est.nombre == nombre)
	console.log(encontrar)
	if (!encontrar){
			console.log('Estudiante no encontrado')
	} else {
		encontrar[materia] = nota;	
		guardar();
		listar();
	}
}

const mostrar = (nom)=>{
	cargar();
	let encontrar = listaEstudiantes.find( buscado =>  buscado.nombre == nom)	
	if (!encontrar){
		return 'No hay estudiante con ese nombre'
	}
	else {	
		texto = `<p> ${encontrar.nombre} tiene las siguientes notas <br>
				Matemáticas = ${encontrar.matematicas} <br>
				Inglés = ${encontrar.ingles} <br>
				Programación = ${encontrar.programacion} <br>
				</p>`	
				
		return texto 
	}
}

const borrar = (nom) =>{
	cargar();
	//Método que modifica el array original
	let indice = lista.findIndex(nom => nom.id == idcurso)
	if (!indice){
		return 'No existe';
	}
	else {
		lista.splice(indice, 1)	
		guardar();
		return 'Elemento borrado';
	}
	
	// Método alternativo que crea un nuevo array y sobreescribe el anterior
	// let nueva = listaEstudiantes.filter(buscado =>  buscado.nombre != nom);
	// if (listaEstudiantes.length == nueva.length){
	// 	return 'No existe';
	// }
	// else {
	// 	listaEstudiantes= nueva;
	// 	guardar();
	// 	return 'Elemento borrado';
	// }
}


module.exports = {
	crear,
	promedio,
	listar,
	listar2,		
	actualizar,
	mostrar,
	borrar
}