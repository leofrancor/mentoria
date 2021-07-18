const numeroA = 10
const numeroB = 2

function pulaLinha() {
    console.log('')
}

function tituloOperacao(operacao) {
    return console.log('***** ' + operacao + ' *****')
}

function nomePrograma() {
    console.log('********** Calculadora beCalc **********')
}

nomePrograma()

// SOMA
pulaLinha()
tituloOperacao('SOMA')
console.log('O resultado de ' + numeroA + ' + ' + numeroB + ' = ' + soma(numeroA,numeroB))

// SUBTRAÇÃO
pulaLinha()
tituloOperacao('SUBTRAÇÃO')
console.log('O resultado de ' + numeroA + ' - ' + numeroB + ' = ' + subtracao(numeroA,numeroB))

// MULTIPLICAÇÃO
pulaLinha()
tituloOperacao('MULTIPLICAÇÃO')
console.log('O resultado de ' + numeroA + ' * ' + numeroB + ' = ' + multiplicacao(numeroA,numeroB))

// DIVISÃO
pulaLinha()
tituloOperacao('DIVISÃO')
console.log('O resultado de ' + numeroA + ' / ' + numeroB + ' = ' + divisao(numeroA,numeroB))

pulaLinha()
console.log('****************************************')