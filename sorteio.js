function sortear() {
    var numerototaldedesenhos = 7;
    var resultado = Math.floor(Math.random() * numerototaldedesenhos) + 1;
    document.getElementById("resultado").innerHTML = "o desenho de hoje é: " + resultado;
}