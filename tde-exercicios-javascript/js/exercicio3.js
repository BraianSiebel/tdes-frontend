// 3 - Leia o nome e a idade e informe se a pessoa é maior de idade.
function exercicio3() {
    const nome = prompt("Digite o seu nome:");
    const idade = Number(prompt("Digite a sua idade:"));

    if (!nome || isNaN(idade) || idade < 0) {
        alert("Nome ou idade inválidos.");
        return;
    }

    if (idade >= 18) {
        alert(nome + " você tem " + idade + " anos, é maior de idade");
    } else {
        alert(nome + " você tem " + idade + " anos, é menor de idade");
    }
}
