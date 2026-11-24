// 1 - Leia dois números e apresente a multiplicação deles.
function exercicio1() {
    const numero1 = Number(prompt("Digite o primeiro número:"));
    const numero2 = Number(prompt("Digite o segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Digite apenas números válidos.");
        return;
    }

    alert(numero1 + " x " + numero2 + " = " + (numero1 * numero2));
}
