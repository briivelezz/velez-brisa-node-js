
let edad = prompt("Introduce tu edad:");
edad = parseInt(edad);
function categoriaEdad(edad) {
    if (edad < 13) {
        return "Es un niño";
    } else if (edad >= 13 && edad <= 17) {
        return "Es un adolescente";
    } else if (edad >= 18 && edad <= 110) {
        return "Es un adulto";
    } else {
        return "No es una edad válida";
    }
}
let resultado = categoriaEdad(edad);
console.log(resultado);
