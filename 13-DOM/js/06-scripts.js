const encabezado = document.querySelector('.contenido-hero h1')
console.log(encabezado)


console.log(encabezado.innerText)   //si en el CSS - visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent) // si lo va encontrar
console.log(encabezado.innerHTML)     //trae el html



 document.querySelector('.contenido-hero h1').textContent = 'nuevo heading'

const imagen = document.querySelector('.card img')
console.log(imagen)
imagen.src = 'img/hacer2.jpg'