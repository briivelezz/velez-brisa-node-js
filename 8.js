
let año = prompt("Introduce un año:");
año = parseInt(año);
function esBisiesto(a) {
 
    return (a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0);
}
if (esBisiesto(año)) {
    console.log("El año ingresado es bisiesto.");
} else {
    console.log("El año ingresado no es bisiesto.");
}
