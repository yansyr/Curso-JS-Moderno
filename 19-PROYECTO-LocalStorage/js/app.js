// Variables
const formulario = document.querySelector('#formulario')
const listaTweets = document.querySelector('#lista-tweets')
let tweets = [];

// Event listeners
eventListeners();
function eventListeners() {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el docuemto esta listo 
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);

        crearHTML();
    });
}


// Funciones
function agregarTweet(e) {
    e.preventDefault();

    // Textarea donde el usuario escribe la
    const tweet = document.querySelector('#tweet').value;

    //Validacion
    if (tweet === '') {
        mostrarError('Un mensaje No puede ir vacío');
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet,              //tweet: tweet
    }

    // Añadir al arragle de Tweets
    tweets = [...tweets, tweetObj];

    
    // Una vez agregado vamos a crear el HTML 
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
    
}


// Mostrar mensaje de error de
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina la alerta despues de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

function crearHTML() {

    limpiarHTML()

    if(tweets.length > 0) {

        tweets.forEach(tweet => {
            // Agregar un boton
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText ='X';
            
            // Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }
            // Crear html 
            const li = document.createElement('li');

            //Añadir texto
            li.innerText = tweet.tweet;

            // Asignar el boton
            li.appendChild(btnEliminar);

            listaTweets.appendChild(li);

        });

    }
    
    sincronizarStorage();
}

// Agrega los tweet actuales al localStorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id);

    crearHTML();
}

// Limpiar html
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}
