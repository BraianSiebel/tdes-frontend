// 5 - Leia três notas, mostre a média e se o aluno foi aprovado (média 6).
function exercicio5() {
    const nota1 = Number(prompt("Digite a primeira nota:"));
    const nota2 = Number(prompt("Digite a segunda nota:"));
    const nota3 = Number(prompt("Digite a terceira nota:"));

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Digite notas válidas.");
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;
    const situacao = media >= 6 ? "Aprovado" : "Reprovado";

    alert("Média: " + media.toFixed(2) + "\nSituação: " + situacao);
}
