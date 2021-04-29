const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// con un foreach
let resultado;

resultado = carrito.filter(produto => produto.precio > 400)
resultado = carrito.filter(producto => producto.precio < 600)
resultado = carrito.filter(producto => producto.nombre !== 'Audifonos')


console.log(resultado)



// con .find