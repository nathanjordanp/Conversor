function convercaoCparaF() {
    var celsius = parseFloat(document.getElementById("celsiusInput").value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("resultado1").innerText = "A temperatura em Fahrenheit é: " + fahrenheit.toFixed(2);
}

function convercaoFparaC() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("resultado2").innerText = "A temperatura em Celsius é: " + celsius.toFixed(2);
}