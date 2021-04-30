const diaHoy = new Date();

let valor = diaHoy;

valor = diaHoy.getFullYear();
valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.setFullYear(2000);

console.log(diaHoy.toLocaleDateString())