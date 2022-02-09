const nombre = "Juan"
const apellido = "Moreno "

const nombreCompleto = `Hola ${nombre} ${apellido}`

console.log(nombreCompleto);

function getSaludo(nombre) {
    return `Hola mundo ${nombre}`
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);