
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
let fahrenheitTemperature = prompt("Introduce la temperatura en grados Fahrenheit:");
fahrenheitTemperature = parseFloat(fahrenheitTemperature);
if (isNaN(fahrenheitTemperature)) {
    console.error("Por favor, introduce un número válido.");
} else {
    let celsiusTemperature = fahrenheitToCelsius(fahrenheitTemperature);
    console.log(`La temperatura en grados Celsius es: ${celsiusTemperature.toFixed(2)}`);