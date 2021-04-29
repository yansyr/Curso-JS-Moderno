const producto = {
    nombre: 'Monitor de 24 pulgadas',
    precio: 300,
    disponible: true
}


const { nombre,} = producto

console.log(nombre)


//Destructurin con Arreglos
const numeros = [10, 20, 30, 40, 50]

const [primero, ...tercero] = numeros

console.log(tercero)