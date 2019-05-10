let estudiante = {
  nombre: 'Maicol',
  edad: 23,
  notas: {
    matematicas: 4,
    ingles: 4,
    programacion: 5
  }
}

let obtenerPromedio = (n1,n2,n3) => {
  return (n1+n2+n3)/3
}

module.exports = {
  estudiante,
  obtenerPromedio
}

