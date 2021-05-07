

// Constructores
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

function UI() {}

// Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
    min = max - 20;
   
    const selectYear = document.querySelector('#year');

    for(let i=max; i>min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

// Muestra alerta en pantalla
UI.prototype.motrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');

    if (tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = 'mensaje';

    //insertar en ele html 
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div,  document.querySelector('#resultado'))
}

// Instarciar UI();
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();  //llena select con los años
});


eventListeners();
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();

    // Leer la marca selecionada 
    const marca = document.querySelector('#marca').value

    // leer el año seleccionado 
    const year = document.querySelector('#year').value;

    // leer la cobertura
    const covertura = document.querySelector('input[name="tipo"]:checked').value

    if (marca === '' || year === '' || covertura === '') {
        ui.motrarMensaje('Todos los campos son obligatorios', 'error')
    } else {
        ui.motrarMensaje('')
    }
}