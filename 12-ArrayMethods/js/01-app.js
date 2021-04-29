const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


// const resultado = meses.includes('Diciembre')
//console.log(resultado)


// en un arreglo de objeto se utiliza .some
const existe = carrito.some(producto => {
    return producto.nombre === 'Celular'
})

console.log(existe)