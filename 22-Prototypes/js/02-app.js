function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 500);

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El Cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `El Cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoría de ${categoria}`;
}

console.log(formatearCliente(juan))

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Codigo con JUan', 4000, 'Curso en línea');

console.log(formatearEmpresa(CCJ));


