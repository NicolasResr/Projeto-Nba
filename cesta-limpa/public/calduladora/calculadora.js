function calcularEficiencia() {

    let pontos = Number(ipt_pontos.value);
    let rebotes = Number(ipt_rebotes.value);
    let assistencias = Number(ipt_assistencias.value);

    let eficiencia =
        pontos +
        rebotes +
        assistencias;

    let nivel = "";

    if (eficiencia < 15) {
        nivel = "Jogador Iniciante";
    }

    else if (eficiencia < 30) {
        nivel = "Bom Jogador";
    }

    else if (eficiencia < 45) {
        nivel = "Nível NBA";
    }

    else {
        nivel = "Lenda da NBA";
    }

    resultadoCalc.innerHTML = `
        Sua eficiência é
        <span style="color:white;">
            ${eficiencia.toFixed(1)}
        </span>
        <br>
        Classificação:
        <span style="color:white;">
            ${nivel}
        </span>
    `;
}

