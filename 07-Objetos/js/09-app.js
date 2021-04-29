"use strict"

const producto = {
    nombre: 'Monitor de 24 pulgadas',
    precio: 300,
    disponible: true
}


//Permite modificar las propieadees pero no permite eliminar ni agregar propiedades
Object.seal(producto)

producto.disponible = false;
console.log(producto)



