const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')
let articulosCarrito = []

cargarEventListeners()
function cargarEventListeners() {
    listaCursos.addEventListener('click', agregarCurso)

    //Elimina cursos de carito
    carrito.addEventListener('click', eliminarCurso)

    // Muestra los cursos del localStorage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || []

        carritoHTML();
    })
}


// Fuciones 
function agregarCurso(e) {
    e.preventDefault()
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement
        // console.log(cursoSeleccionado)

        leerDatosCurso(cursoSeleccionado)
    }
}

function eliminarCurso(e) {
  
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id')

        //Eliminar del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)
        
        carritoHTML()  //Iterar sobre el carrito y mostrar su html
    }

    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []
        limpiarHTML()
    })
}

// Leer el contenido del HTML al que le dimos clic y extrae la informacion del cursos
function leerDatosCurso (curso) {
   

    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
    if (existe) {
        // actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++
                return curso  //returna el objeto actualizado
            } else {
                return curso  //retorna los objetos que no son los duplicado
            }
        })
        articulosCarrito = [...cursos]
    } else {
        //agregamos el carrito
        //agrega elemeto al carrito del
        articulosCarrito = [...articulosCarrito, infoCurso]
    }

    

    

    carritoHTML()
}


// Muestra el carrti de compra en el HTML
function carritoHTML() {

    // limpiar el html
    limpiarHTML()

    articulosCarrito.forEach(curso => {
        const {imagen, titulo, precio, cantidad, id} = curso

        
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>
                <img src="${imagen}"  width="100">
            </td> 
            <td>${titulo}</td> 
            <td>${precio}</td> 
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}" > X </a>
            </td>
        `

        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row)
    })

    // Agregar el carrito de compras localStorage
    sincronizarStorage()
}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito))
}


// Elimina los curso de tbody
function limpiarHTML() {
    //  forma lenta
     //contenedorCarrito.innerHTML = ''


     while(contenedorCarrito.firstChild) {
         contenedorCarrito.removeChild(contenedorCarrito.firstChild)
     }
}