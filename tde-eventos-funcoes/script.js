// ===================== Exercício 1: Calculadora Simples =====================

// Lê os dois campos e devolve os números, ou null se algum valor for inválido.
function lerNumeros() {
    const texto1 = document.getElementById("numero1").value.trim().replace(",", ".");
    const texto2 = document.getElementById("numero2").value.trim().replace(",", ".");

    if (texto1 === "" || texto2 === "") {
        mostrarResultadoCalculadora("Preencha os dois campos.");
        return null;
    }

    const numero1 = Number(texto1);
    const numero2 = Number(texto2);

    if (isNaN(numero1) || isNaN(numero2)) {
        mostrarResultadoCalculadora("Digite apenas números válidos.");
        return null;
    }

    return { numero1, numero2 };
}

function mostrarResultadoCalculadora(mensagem) {
    document.getElementById("resultadoCalculadora").textContent = mensagem;
}

function somar() {
    const n = lerNumeros();
    if (n) mostrarResultadoCalculadora(`${n.numero1} + ${n.numero2} = ${n.numero1 + n.numero2}`);
}

function subtrair() {
    const n = lerNumeros();
    if (n) mostrarResultadoCalculadora(`${n.numero1} - ${n.numero2} = ${n.numero1 - n.numero2}`);
}

function multiplicar() {
    const n = lerNumeros();
    if (n) mostrarResultadoCalculadora(`${n.numero1} x ${n.numero2} = ${n.numero1 * n.numero2}`);
}

function dividir() {
    const n = lerNumeros();
    if (!n) return;

    if (n.numero2 === 0) {
        mostrarResultadoCalculadora("Não é possível dividir por zero.");
        return;
    }
    mostrarResultadoCalculadora(`${n.numero1} ÷ ${n.numero2} = ${n.numero1 / n.numero2}`);
}

function limparCalculadora() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    mostrarResultadoCalculadora("");
}

// ============ Exercício 2: Cálculo de Nota e Verificação de Aprovação ============

// Chamada no evento blur (perda de foco) de cada campo.
// Devolve o valor da nota se for válida, ou null se for inválida.
function validarNota(idCampo, maximo) {
    const campo = document.getElementById(idCampo);
    const erro = document.getElementById("erro-" + idCampo);
    const texto = campo.value.trim().replace(",", ".");
    const nota = Number(texto);

    if (texto === "") {
        erro.textContent = "Informe a nota.";
        return null;
    }
    if (isNaN(nota) || nota < 0 || nota > maximo) {
        erro.textContent = `A nota deve estar entre 0 e ${maximo}.`;
        campo.style.borderColor = "#b00020";
        return null;
    }

    erro.textContent = "";
    campo.style.borderColor = "";
    return nota;
}

function calcularNotaFinal() {
    const ap1 = validarNota("ap1", 1.5);
    const ap2 = validarNota("ap2", 3);
    const as = validarNota("as", 5.5);
    const resultado = document.getElementById("resultadoNotas");

    resultado.classList.remove("aprovado", "reprovado");

    if (ap1 === null || ap2 === null || as === null) {
        resultado.textContent = "Corrija as notas antes de calcular.";
        return;
    }

    const notaFinal = ap1 + ap2 + as;
    const notaFormatada = notaFinal.toFixed(1);

    if (notaFinal >= 6) {
        resultado.textContent = `Nota ${notaFormatada}. Aprovado. Parabéns.`;
        resultado.classList.add("aprovado");
    } else {
        resultado.textContent = `Nota ${notaFormatada}. Reprovado. Reforce seus estudos para realização da AF.`;
        resultado.classList.add("reprovado");
    }
}
