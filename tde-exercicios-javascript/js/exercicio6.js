// 6 - Leia um número de 1 a 7 e mostre o dia da semana (1 = domingo, 7 = sábado).
function exercicio6() {
    const numero = Number(prompt("Digite um número de 1 a 7:"));

    switch (numero) {
        case 1: alert("Domingo"); break;
        case 2: alert("Segunda-feira"); break;
        case 3: alert("Terça-feira"); break;
        case 4: alert("Quarta-feira"); break;
        case 5: alert("Quinta-feira"); break;
        case 6: alert("Sexta-feira"); break;
        case 7: alert("Sábado"); break;
        default: alert("Número inválido! Digite um valor de 1 a 7.");
    }
}
