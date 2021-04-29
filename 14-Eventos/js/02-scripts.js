const nav = document.querySelector('.navegacion')

// registrar un evento
nav.addEventListener('mouseout', () => {
    console.log('salidendo de la navegacion')

    nav.style.backgroundColor = 'transparent'
})

nav.addEventListener('dblclick', () => {
    console.log('entrando en la navegacion')

    nav.style.backgroundColor = 'white'
})