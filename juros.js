import entradaDados from 'readline-sync'

let divida = {
    valorDivida: '',
    diasAtraso: ''
}

let juros = ''

console.log("Aplicação de Juros:\n")

divida.valorDivida = entradaDados.question("Informe o valor devido: R$ ")
divida.diasAtraso = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ")

if (divida.valorDivida <= 0) {
    console.log("\nVocê não tem dividas em aberto")
}
else if (divida.diasAtraso <= 0) {
    console.log("\nVocê não tem dividas em atraso")
}
else if (divida.diasAtraso <= 15) {
    juros = 5
    calculaJuros(juros)
}
else {
    juros = 10
    calculaJuros(juros)
}

function calculaJuros(juros) {
    let valorJuros = (Number(divida.valorDivida) / 100) * juros
    let totalDivida = Number(divida.valorDivida) + valorJuros
    console.log(`\nValor original da dívida: R$ ${divida.valorDivida}`)
    console.log(`Dias atrasados: ${divida.diasAtraso} dias`)
    console.log(`Taxa de Juros: ${juros}%`)
    console.log(`Valor total com juros: R$ ${totalDivida}`)
}