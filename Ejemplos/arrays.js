// Arreglos

const arreglo = [1, 2, 3, 4, 5];
// const arreglo1 = new Array(1, 2, 3, 4, 5);

const arregloVacio = new Array(4);

// Métodos
const nuevoArreglo = arreglo.concat(arregloVacio);
const cantidad = nuevoArreglo.push("perro");
const elementoBorrado = nuevoArreglo.pop();
// console.log(nuevoArreglo.join(","));

// Métodos que se usan todos los días

// For Each - NO DEVUELVE
const forEach1 = nuevoArreglo.forEach((elemento, indice, arreglo) => {
  console.log(elemento);
});
// console.log(forEach1);

// Map - SÍ DEVUELVE
const arregloMapeado = nuevoArreglo.map((elemento, patito, array) => {
  console.log(array);
  return `${elemento}-${patito}`;
});
// console.log(arregloMapeado);

const arregloPersonas = [
  {
    nombre: "Luis",
    apellido: "Cascante",
    perros: 3,
  },
  {
    nombre: "Aaron",
    apellido: "Chavarría",
    perros: 2,
    gatos: 1,
  },
  {
    nombre: "Allan",
    apellido: "Madríz",
    perros: 2,
  },
  {
    nombre: "Patrick",
    apellido: "Robinson",
    gatos: 1,
  },
  {
    nombre: "Patrick",
    apellido: "Madríz",
    perros: 2,
  },
];

const patrick = arregloPersonas.find((persona) => {
  return persona.nombre === "Patrick";
});
// console.log(patrick);

const personasConPerros = arregloPersonas.filter((persona) => {
  return persona.perros <= 2;
});
// console.log(personasConPerros);

const arregloReducido = arreglo.reduce((accumulador, elementoActual) => {
  return accumulador + elementoActual;
});
// console.log(arregloReducido);

const cantidadDePerros = arregloPersonas.reduce((acumulador, persona) => {
  return acumulador + persona.perros;
}, 0);
// console.log(cantidadDePerros);

// <----------- PRÁCTICA ----------->

// Programar el array.forEach
function forEach(arreglo, funcion) {
  for (let i = 0; i < arreglo.length; i++) {
    const elemento = arreglo[i];
    funcion(elemento, i, arreglo);
  }
}

const arregloEjemplo = [1, 2, 3];
function imprimirElemento(elemento) {
  console.log(elemento);
}

forEach(arregloEjemplo, imprimirElemento);

// Programar el array.map

/*
  arreglo = [1,2,3]
  function sumarUno(numero){
    return numero++;
  }

  arrayMap(arreglo, sumarUno); // [2,3,4]
*/
function arrayMap(arreglo, funcion) {}
