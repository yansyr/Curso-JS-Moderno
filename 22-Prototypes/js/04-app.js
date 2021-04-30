function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Gold'
    } else if (this.saldo > 5000) {
        tipo = 'Platino'
    } else {
        tipo = 'Normal'
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente() }`
}

Cliente.prototype.retiraSaldo = function (retira) {
    this.saldo -= retira;
}

function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo)
    this.telefono = telefono
}

Persona.prototype = Object.create(Cliente.prototype)

Persona.prototype.constructor = Cliente;

const juan = new Persona('juan', 5000, '555-333-3333')

console.log(juan.nombreClienteSaldo())


Persona.prototype.mostrarTelefono = function () {
    return `El telefono de esta persona es ${this.telefono}`
}

console.log(juan.mostrarTelefono())