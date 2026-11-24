// 7 - Leia números até que um negativo seja digitado e mostre a média dos números digitados.
function exercicio7() {
    let soma = 0;
    let quantidade = 0;

    while (true) {
        const entrada = prompt("Digite um número (um número negativo encerra):");
        if (entrada === null) {
            break;
        }

        const numero = Number(entrada);
        if (isNaN(numero) || entrada.trim() === "") {
            alert("Valor inválido, tente novamente.");
            continue;
        }
        if (numero < 0) {
            break;
        }

        soma += numero;
        quantidade++;
    }

    if (quantidade === 0) {
        alert("Nenhum número válido foi digitado.");
    } else {
        alert("Você digitou " + quantidade + " número(s). Média: " + (soma / quantidade).toFixed(2));
    }
}
