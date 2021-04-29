localStorage.setItem('nombre', 1) 

const producto = {
    nombre: 'Monitor de 24 pulgadas',
    precio: 300
}

const productoString = JSON.stringify(producto)
console.log(productoString)

localStorage.setItem('producto', productoString)


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']

localStorage.setItem('meses', JSON.stringify(meses))