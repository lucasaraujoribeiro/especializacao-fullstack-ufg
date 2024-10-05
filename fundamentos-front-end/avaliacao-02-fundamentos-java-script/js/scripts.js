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

function contarAteN() {
    const n = Number(window.prompt('Informe o valor de N: '));

    let contagem = '';
    for (let i = 1; i <= n; i++) {
        contagem += i == n ? i : `${i},`;
    }

    let res = document.querySelector('section#resultadoMediaAluno')
    res.innerHTML = '<h3>Resultados<h3>';
    res.innerHTML += `<div class="contagem"> <span>Contagem de 1 até ${n} é ${contagem} <span></div>`
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