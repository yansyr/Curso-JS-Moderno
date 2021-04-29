const producto = {
    nombre: 'Monitor de 24 pulgadas',
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'    
        },
        fabricacion: {
            pais: 'China'
        }
    }
}


const { nombre, informacion: { fabricacion: { pais } } } = producto;
console.log(pais)