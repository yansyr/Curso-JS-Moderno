const producto = {
    nombre: 'Monitor de 24 pulgadas',
    precio: 300,
    disponible: true
}


//Agregar nuevas propiedades al objeto


producto.imagen = 'image.jpg'

delete producto.disponible
console.log(producto)