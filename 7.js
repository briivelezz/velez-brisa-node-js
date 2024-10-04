
let numero1 = prompt("Introduce el primer número:");
let numero2 = prompt("Introduce el segundo número:");
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);
function numeroMayor(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "Los números son iguales.";
    }
}
let mayor = numeroMayor(numero1, numero2);
console.log("El número mayor es: " + mayor);
