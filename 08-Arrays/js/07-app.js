const carrito = []

//Definir un producto
const producto = {
    nombre: "Monitor de 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

carrito.push(producto2)
carrito.push(producto)

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

const producto4 = {
    nombre: "Celular 2",
    precio: 100
}

carrito.unshift(producto3)

carrito.push(producto4)
console.table(carrito)
//Eliminar el utlimo elemento del arreglo
//carrito.pop();
//console.table(carrito)


//Eliminar el inicio del arreglo
//carrito.shift();
//console.table(carrito)


carrito.splice(1,2);
console.table(carrito)