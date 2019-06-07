
const matematicas = {
  default: 0,
  alias: 'm'
}

const ingles= {
  default: 0,
  alias: 'i'
}
const programacion = {
  demand: true,
  alias: 'p'
}

const nombre = {
  demand: true,
  alias: 'n'
}

const muestraEstudiante = {
  nombre
}

const eliminar = {
  nombre
}

const actualizar = {
  nombre,
  asignatura: {
    demand: true,
    alias: 'a'
  },

  calificacion: {
    demand: true,
    alias: 'c'
  }

}

const creacion = {
  nombre,
  matematicas,
  programacion,
  ingles
}
const argv = require("yargs")
            .command('crear', 'Calcular el promedio', creacion)
            .command('mostrar', 'Mostrar los estudiantes..')
            .command('mostrar_est', 'MOstrar estudiante', muestraEstudiante)
            .command('eliminar', 'Eliminar estudiante', muestraEstudiante)
            .command('actualizar', 'Actualizar calificacion', actualizar)            
            .argv


module.exports = {
  argv
}