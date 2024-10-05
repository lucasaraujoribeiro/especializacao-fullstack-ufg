function calcularMediaAluno() {
    const nome = window.prompt('Informe o nome do aluno:')
    const disciplina = window.prompt('Informe o nome da disciplina:')
    const nota01 = Number(window.prompt('Informe a nota 1:'))
    const nota02 = Number(window.prompt('Informe a nota 2:'))

    const media = (nota01 + nota02) / 2;

    const resultados = {
        nome,
        disciplina,
        nota01,
        nota02,
        media
    }

    let res = document.querySelector('section#resultadoMediaAluno')
    res.innerHTML = montarHtmlTabelaResultados(resultados);
}

function montarHtmlTabelaResultados(resultados) {
    let html = '<h3>Resultado</h3>';
    html += '<table class="tbResultados">';
    html += '<tr>';
    for (const key of Object.keys(resultados)) {
        const nomeColuna = key.charAt(0).toUpperCase() + key.slice(1).toLowerCase();
        html += `<th>${nomeColuna}</th>`
    }
    html += '</tr>'

    html += '<tr>';
    for (const key of Object.keys(resultados)) {
        html += `<td>${resultados[key]}</td>`
    }
    html += '</tr>';

    html += '</table>';

    return html;
}