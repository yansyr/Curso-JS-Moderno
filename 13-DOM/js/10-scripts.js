const enlace = document.createElement('a')


enlace.textContent = 'Nuevo enlace'
enlace.href = '/nuevo enlace'
enlace.target = '_blank'
enlace.setAttribute('data-enlace', 'nuevo-enlace')
enlace.classList.add('alguna-clase')


console.log(enlace)


const navegacion = document.querySelector('.navegacion')
//navegacion.appendChild(enlace)

navegacion.insertBefore(enlace, navegacion.children[1])



// Crear un Card de forma dinámica
const parrafo1 = document.createElement('p')
parrafo1.textContent = 'Contenido'
parrafo1.classList.add('categoría', 'concierto')

const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Concierto de Rock'
parrafo2.classList.add('titulo')

const parrafo3 = document.createElement('p')
parrafo3.textContent = '$800 por persona'
parrafo3.classList.add('precio')

// Crear div con la clase de info
const info = document.createElement('div')
info.classList.add('info')

info.append(parrafo1, parrafo2, parrafo3)

const imagen = document.createElement('img')
imagen.src = 'img/hacer2.jpg'
imagen.alt = 'texto alternativo'

// Crear el card
const card = document.createElement('div')
card.classList.add('card')
card.appendChild(imagen)
card.appendChild(info)


// insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards')
contenedor.appendChild(card)


console.log(card)