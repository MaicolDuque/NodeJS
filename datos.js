let cursos = [
  {
    id: 1,
    nombre: "React JS - Fundamentos",
    duracion: 24,
    valor: 120000
  },
  {
    id: 2,
    nombre: "Node JS - Fundamentos",
    duracion: 32,
    valor: 0
  },
  {
    id: 3,
    nombre: "Vue JS - Fundamentos",
    duracion: 15,
    valor: 25000
  }
];


const opciones = {
  id: {
    demand: true,
    alias: 'i'
  },
  nombre: {
    demand: true,
    alias: 'n'
  },
  cedula: {
    demand: true,
    alias: 'x'
  }
}

module.exports = {
 cursos,
 opciones
}