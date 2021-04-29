// variables
const btnEnviar = document.querySelector('#enviar')
const btnReset = document.querySelector('#resetBtn')
const formulario = document.querySelector('#enviar-mail')

// variables para campos
const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')
evenListeners()
function evenListeners() {
    // cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp)

    // campos del formulario
    email.addEventListener('blur', validarFormulario)
    asunto.addEventListener('blur', validarFormulario)
    mensaje.addEventListener('blur', validarFormulario)

    // Reinicia el formulario
    btnReset.addEventListener('click', e => {
        resetearFormulario(e)
    }) 

    // Enviar email
    formulario.addEventListener('submit', enviarEmail)
}

// funciones
function iniciarApp() {
    btnEnviar.disabled = true
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')

    email.focus()
}

function validarFormulario(e) {
    
    
    if(e.target.value.length > 0) {
        // elimina los errores
        const error = document.querySelector('p.error')
        if (error) {
            error.remove()
        }

        e.target.classList.remove('border', 'border-red-500')
    } else {
        e.target.classList.add('border', 'border-red-500')
        mostrarError('Todos los campos son obligatorios')
    }

    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (e.target.type === 'email') {
        
        if(er.test(e.target.value)) {
            // elimina los errores
            const error = document.querySelector('p.error')
            if (error) {
                error.remove()
            }

            e.target.classList.remove('border', 'border-red-500')
            e.target.classList.add('border', 'border-green-500')
        } else {
            e.target.classList.remove('border', 'border-green-500')
            e.target.classList.add('border', 'border-red-500')
            mostrarError('Email no válido')
        }
    }

     if( er.test(email.value) && asunto.value !== '' &&mensaje.value !== '') {
        btnEnviar.disabled = false
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50')
     }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p')
    mensajeError.textContent = mensaje
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error')

    const errores = document.querySelectorAll('.error')
    if (errores.length === 0) {
        formulario.appendChild(mensajeError)
    }
}


function enviarEmail(e) {
    e.preventDefault()

    // Mostrar el spinner
    const spinner = document.querySelector('#spinner')
    spinner.style.display = 'flex'
    

    //Despues de 3 segundos ocultar spiner y mostar el mensaje
    setTimeout(() => {
        spinner.style.display = 'none'

        // Mensaje que dice que envió correctamente
        const parrafo = document.createElement('p')
        parrafo.textContent = 'El mensaje se envió correctamente'
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase')

        // Inserta el parrafo de puesde del spiner
        formulario.insertBefore(parrafo, spinner)

        setTimeout( () => {
            parrafo.remove()

            resetearFormulario(e)
        }, 5000)


    }, 3000)
}


// Funcion que resetea el formulario 
function resetearFormulario(e) {
    e.preventDefault()

    formulario.reset()

    iniciarApp()
}