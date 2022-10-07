import entradaDados from 'readline-sync'

let divida = {
    valorDivida: '',
    diasAtraso: ''
}

console.log("Aplicação de Juros:\n")

divida.valorDivida = entradaDados.question("Insira o valor da divida: ")
divida.diasAtraso = entradaDados.question("Inisira os dias de atraso:")

if (divida.valorDivida == 0) {
    console.log("\nVocê não tem dividas em aberto")
} else if (divida.diasAtraso == 0) {
    console.log("\nVocê não tem dividas em atraso")
} else {
    console.log(`\nValor original da dívida: R$ ${divida.valorDivida}`)
    console.log(`Dias atrasados: ${divida.diasAtraso} dias`)
    console.log(`Taxa de Juros: 0%`)
    console.log(`Valor total com juros: R$0`)
}