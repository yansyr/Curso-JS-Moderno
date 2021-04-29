window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium')
    const ubicacion = premium.getBoundingClientRect()

    
    if (ubicacion.top < 100) {
        console.log('El elemento ya está visible')
    } else {
        console.log('Aún no, da más scroll')
    }
    
})