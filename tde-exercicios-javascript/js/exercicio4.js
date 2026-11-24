// 4 - Receba um número e mostre a tabuada dele.
function exercicio4() {
    const numero = Number(prompt("Digite um número para ver a tabuada:"));

    if (isNaN(numero)) {
        alert("Digite um número válido.");
        return;
    }

    let tabuada = "Tabuada do " + numero + ":\n";
    for (let i = 1; i <= 10; i++) {
        tabuada += numero + " x " + i + " = " + (numero * i) + "\n";
    }

    alert(tabuada);
}
