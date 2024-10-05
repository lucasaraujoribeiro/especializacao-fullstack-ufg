function maior_valor() {
    let numero1 = Number(window.prompt('Digite o número 1: '))
    let numero2 = Number(window.prompt('Digite o número 2: '))
    
    let res = document.querySelector('section#saida')
    if (numero1 > numero2) {
        res.innerHTML = `<p>Analisando os valores ${numero1} e ${numero2}, o maior valor é <strong>${numero1}</strong></p>`
    } else if (numero1 < numero2) {
        res.innerHTML = `<p>Analisando os valores ${numero1} e ${numero2}, o maior valor é <strong>${numero2}</strong></p>`
    } else {
        res.innerHTML = `<p>Analisando os valores ${numero1} e ${numero2}, ambos são <strong>IGUAIS</strong></p>`
    }
}