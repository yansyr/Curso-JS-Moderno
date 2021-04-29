
const producto = {
    nombre: 'Monitor de 24 pulgadas',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}


console.log(producto)
console.log(medidas)

const resultado = Object.assign(producto,medidas)
console.log(resultado)


const resultado2 = {...producto, ...medidas}
console.log(resultado2)