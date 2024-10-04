
let angulo1 = prompt("Introduce el primer ángulo:");
let angulo2 = prompt("Introduce el segundo ángulo:");
let angulo3 = prompt("Introduce el tercer ángulo:");
angulo1 = parseFloat(angulo1);
angulo2 = parseFloat(angulo2);
angulo3 = parseFloat(angulo3);
function esTrianguloValido(a1, a2, a3) {
    return (a1 + a2 + a3 === 180) && (a1 > 0 && a2 > 0 && a3 > 0);
}
if (esTrianguloValido(angulo1, angulo2, angulo3)) {
    console.log("El triángulo es válido.");
} else {
    console.log("El triángulo no es válido.");
}
