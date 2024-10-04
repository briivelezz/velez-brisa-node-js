
let numero = prompt("Introduce un número:");

numero = parseFloat(numero);

function esDivisiblePor5(num) {
    return num % 5 === 0;
}

if (esDivisiblePor5(numero)) {
    console.log(numero + " es divisible por 5.");
} else {
    console.log(numero + " no es divisible por 5.");
}
