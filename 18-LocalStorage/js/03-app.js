localStorage.removeItem('nombre')

// Actualiar un registro de
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray)
mesesArray.push('Agosto')
console.log(mesesArray)


localStorage.setItem('meses', JSON.stringify(mesesArray))

localStorage.clear()