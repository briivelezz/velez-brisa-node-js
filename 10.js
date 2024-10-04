
let color = prompt("Introduce un color (azul, rojo, verde, naranja, amarillo):");
function obtenerColorEnIngles(color) {
    switch (color.toLowerCase()) {
        case "azul":
            return "blue";
        case "rojo":
            return "red";
        case "verde":
            return "green";
        case "naranja":
            return "orange";
        case "amarillo":
            return "yellow";
        default:
            return "Color not found";
    }
}
let resultado = obtenerColorEnIngles(color);
console.log(resultado);
