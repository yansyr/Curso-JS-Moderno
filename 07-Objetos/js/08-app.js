"use strict"

const producto = {
    nombre: 'Monitor de 24 pulgadas',
    precio: 300,
    disponible: true
}

Object.freeze(producto)

//producto.disponible = false;
console.log(producto)

console.log(Object.isFrozen(producto))


