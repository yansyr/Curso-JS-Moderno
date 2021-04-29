//Object Literal
const producto = {
    nombre: 'Monitor de 24 pulgadas',
    precio: 300,
    disponible: true,
}


//Object constructor
 function Producto(nombre, precio) {
     this.nombre = nombre;
     this.precio = precio;
     this.disponible = true;
 }


 const producto2 = new Producto('Monitor de 24 pulgadas', 500)
 console.log(producto2)