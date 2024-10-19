const btnVerResultado = document.querySelector("#btnCalcularImc");
btnVerResultado.addEventListener('click', (e) => {
    e.preventDefault();
    calcularImc()
});

const btnLimpar = document.querySelector('#btnLimpar');
btnLimpar.addEventListener('click', (e) => {
    e.preventDefault();
    limparForm();
});

const elMsgAlert = document.querySelector("#alertmsg");

function calcularImc() {
    limparMsg();

    let altura = document.querySelector("#altura").value;
    let peso = document.querySelector("#peso").value;

    if (isEmpty(altura)) {
        exibirMensagem(`A altura deve ser informada!`, 'danger')
        return;
    }

    altura = altura.replace('.','').replace(',','.');
    if (!isNumber(altura)) {
        exibirMensagem(`A altura é inválida! ${altura}`, 'danger')
        return;
    }

    if (isEmpty(peso)) {
        exibirMensagem(`A peso deve ser informado!`, 'danger')
        return;
    }

    peso = peso.replace('.','').replace(',','.');
    if (!isNumber(peso)) {
        exibirMensagem(`A peso é inválido! ${peso}`, 'danger')
        return;
    }

    altura = Number(altura);
    peso = Number(peso);

    altura = altura * altura;
    const resultado = peso / altura;

    let situacao = '';
    let grauObesidade = '';
    if (resultado < 16) {
        situacao = 'magreza grave';
    } else if (resultado < 17) {
        situacao = 'magreza moderada';
    } else if (resultado < 18.6) {
        situacao = 'magreza leve';
    } else if (resultado < 25) {
        situacao = 'peso ideal';
    } else if (resultado < 30) {
        situacao = 'sobrepeso';
    } else if (resultado < 35) {
        situacao = 'Obesidade grau I';
        grauObesidade = 1;
    } else if (resultado < 40) {
        situacao = 'Obesidade grau II ou severa';
        grauObesidade = 2;
    } else {
        situacao = 'Obesidade grau III ou mórbida';
        grauObesidade = 3;
    }

    document.querySelector('#valor-imc'). value = Math.trunc(resultado * 100) / 100;
    document.querySelector('#situacao-imc'). value = situacao;
    document.querySelector('#grau-obesidade-imc'). value = grauObesidade;

    exibirMensagem('Calculo realizado com sucesso!', 'success');
}

function limparForm() {
    document.querySelector('#altura').value = '';
    document.querySelector('#peso').value = '';
    document.querySelector('#valor-imc'). value = '';
    document.querySelector('#situacao-imc'). value = '';
    document.querySelector('#grau-obesidade-imc'). value = '';
}

function limparMsg() {
    elMsgAlert.style.display = 'none';
    elMsgAlert.textContent = '';
    for (let n of elMsgAlert.childNodes) {
        console.log(`Node msg: ${n.textContent}`);
        n.remove();
    }
}

function exibirMensagem(msg, tipo) {
    let tipoMsgDescricao = '';

    switch (tipo) {
        case 'sucess':
            tipoMsgDescricao = 'Sucesso!';
            break;
        case 'danger':
            tipoMsgDescricao = 'Erro!';
            break;
        case 'warning':
            tipoMsgDescricao = 'Aviso!';
            break;
        case 'info':
            tipoMsgDescricao = 'Informação';
            break;
    }

    const strong = document.createElement("strong");
    strong.appendChild(document.createTextNode(tipoMsgDescricao));

    elMsgAlert.style.display = '';
    elMsgAlert.setAttribute('class', `alert alert-${tipo}`);
    elMsgAlert.appendChild(strong);
    elMsgAlert.appendChild(document.createTextNode(` ${msg}`));

    setTimeout(limparMsg, 2000);
}

function isEmpty(value) {
    return value === undefined || value === null || value === '';
}

function isNumber(value) {
    const regex = /^-?\d+(\.\d+)?$/;
    return regex.test(value);
}