// 2 - Leia um número e informe se é par ou ímpar e se é positivo ou negativo.
function exercicio2() {
    const numero = Number(prompt("Digite um número inteiro:"));

    if (isNaN(numero) || !Number.isInteger(numero)) {
        alert("Digite um número inteiro válido.");
        return;
    }

    const paridade = numero % 2 === 0 ? "par" : "ímpar";
    let sinal;
    if (numero > 0) {
        sinal = "positivo";
    } else if (numero < 0) {
        sinal = "negativo";
    } else {
        sinal = "zero (nem positivo nem negativo)";
    }

    alert("O número " + numero + " é " + paridade + " e " + sinal + ".");
}
