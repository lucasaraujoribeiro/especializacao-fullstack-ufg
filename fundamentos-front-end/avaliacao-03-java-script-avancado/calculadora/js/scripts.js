const btnVerResultado = document.querySelector("#btn-resultado");
btnVerResultado.addEventListener('click', (e) => {
    e.preventDefault();
    calcular()
});

const elMsgAlert = document.querySelector("#alertmsg");

function calcular() {
    const iptResultado = document.querySelector("#resultado");
    iptResultado.value = 0;

    limparMsg();

    let n1 = document.querySelector("#n1").value;
    let n2 = document.querySelector("#n2").value;
    const operacao = document.querySelector("#op").value;

    if (isEmpty(n1)) {
        exibirMensagem(`O número 1 deve ser informado!`, 'danger')
        return;
    }

    n1 = n1.replace('.','').replace(',','.');

    if (!isNumber(n1)) {
        exibirMensagem(`O Numero 1 inválido! ${n1}`, 'danger')
        return;
    }

    if (isEmpty(n2)) {
        exibirMensagem(`O número 2 deve ser informado!`, 'danger')
        return;
    }
   
    n2 = n2.replace('.','').replace(',','.');

    if (!isNumber(n2)) {
        exibirMensagem(`O Numero 2 inválido! ${n2}`, 'danger')
        return;
    }

    n1 = Number(n1);
    n2 = Number(n2);

    let resultado;
    switch (operacao) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            if (n2 === 0) {
                exibirMensagem(`Não é possivel fazer divisão por zero!`, 'danger');
                return;
            }
            resultado = n1 / n2;
            break;
        default:
            break;
    }

    iptResultado.value = resultado;
    exibirMensagem(`Calculo realizado com sucesso!`, 'success')
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