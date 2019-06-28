const hbs = require('hbs');
const funciones = require('.././funciones');

hbs.registerHelper('obtenerPromedio', (estudiante) => {
	return (estudiante.matematicas+estudiante.ingles+estudiante.programacion)/3;
});

hbs.registerHelper('guardarEstudiante', (estudiante) => {
	return funciones.crear(estudiante);
});

hbs.registerHelper('listar', () => {
	try {
		return funciones.listar()
	} catch(err){
	 	return "No hay cursos disponibles";
	}					
});

 hbs.registerHelper('listar2', () => {
	try {
			return funciones.listar2()
		} catch(err){
		 	return "No hay cursos disponibles";
		 }					
	});

  hbs.registerHelper('promedio', (nombre) => {
		return funciones.promedio(nombre);			
	});

 
 hbs.registerHelper('desplegable', () => {
 	lista = require('./../listado.json')
 	let texto =`<div class="form-group">
				<label>Estudiantes</label>              
          		<select class="form-control" name="nombre">
				<option value="-">-</option>`
	lista.forEach(estudiante =>{		
			texto = texto +`<option value="${estudiante.nombre}">${estudiante.nombre}</option>`
			});
	texto = texto + `</select><br></div>`
	return texto;
 });


 hbs.registerHelper('actualizar', (nombre, asignatura, nota) => {
		return funciones.actualizar(nombre, asignatura, nota);			
	});

 hbs.registerHelper('mostrar', (nombre) => {
		return funciones.mostrar(nombre);			
	});
