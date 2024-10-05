function calcularMediaAluno() {
    const nome = window.prompt('Informe o nome do aluno:')
    const disciplina = window.prompt('Informe o nome da disciplina:')
    const nota01 = Number(window.prompt('Informe a nota 1:'));
    if (nota01 < 0) {
        monstrarMensagemResultados('O valor da nota não pode ser menor que zero');
        return;
    } 
    const nota02 = Number(window.prompt('Informe a nota 2:'));
    if (nota02 < 0) {
        monstrarMensagemResultados('O valor da nota não pode ser menor que zero');
        return;
    } 

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

    if (n <= 0) {
        monstrarMensagemResultados('O número informado deve ser maior que zero');
        return;
    }

    let contagem = '';
    for (let i = 1; i <= n; i++) {
        contagem += i == n ? i : `${i},`;
    }

    monstrarMensagemResultados(`Contagem de 1 até ${n} é ${contagem}`)
}

function calcularIdade() {
    const anoNascimento = Number(window.prompt('Informe o ano de nascimento: '));
    const anoAtual = new Date().getFullYear();

    if (!anoNascimento || anoNascimento <= 0) {
        monstrarMensagemResultados(`Ano de nascimento invalido ou não informado!`);
    } else if (anoNascimento > anoAtual) {
        monstrarMensagemResultados(`O ano de nascimento informado: ${anoNascimento}, é maior que o ano atual: ${anoAtual}`);
    } else if (anoNascimento <= anoAtual) {
        monstrarMensagemResultados(`Quem nasceu em ${anoNascimento} irá completar ${anoAtual - anoNascimento}  anos em ${anoAtual} `);
    }
}

function calcularFatorial() {
    const n = Number(window.prompt('Informe um numero: '));

    if (n < 0) {
        monstrarMensagemResultados(`O número não pode ser negativo!`);
        return;
    }

    if (n === 0) {
        monstrarMensagemResultados('O fatorial de 0 é 1 </br> !0 = 1');
        return;
    }

    let fatorial = n;
    let msgFatorial = `!${n} = ${n} `;
    for (let i = n; i > 1; i--) {
        fatorial *= i - 1;
        msgFatorial += ` x ${i - 1}`;
        debugger;
    }

    monstrarMensagemResultados(`O fatorial de ${n} é ${fatorial} </br> ${msgFatorial} = ${fatorial}`);

}

function imparOuPar() {
    const n = Number(window.prompt('Informe um número'));

    let msg = `O número ${n} que foi digitado é `
    msg += (n % 2) === 0 ? 'par' : 'impar';

    monstrarMensagemResultados(msg);
}

function mostrarTabuada() {
    const n = Number(window.prompt('Informe um número:'));

    let tabuada = '';
    for (let i = 1; i <= 10; i++) {
        tabuada += `${n} x ${i} = ${n * i} </br>`;
    }
    monstrarMensagemResultados(`Tabuada de ${n}</br> ${tabuada}`);
}

function monstrarMensagemResultados(msg) {
    let res = document.querySelector('section#resultadoMediaAluno')
    res.innerHTML = '<h3>Resultados<h3>';
    res.innerHTML += `<p>${msg}</p>`;
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