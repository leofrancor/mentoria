const numeroA = 10
const numeroB = 2
const resultadoSoma = numeroA + numeroB
const resultadoSub = numeroA - numeroB
const resultadoMul = numeroA * numeroB
const resultadoDiv = numeroA / numeroB

function pulaLinha() {
    console.log('')
}

function tituloOperacao(operacao) {
    return console.log('***** ' + operacao + ' *****')
}

function nomePrograma() {
    console.log('********** Calculadora beCalc **********')
}

function resultado(operacao) {
    if(operacao == 'SOMA')
    console.log('O resultado de ' + numeroA + ' + ' + numeroB + ' = ' + resultadoSoma)

    if(operacao == 'SUBTRAÇÃO')
    console.log('O resultado de ' + numeroA + ' - ' + numeroB + ' = ' + resultadoSub)

    if(operacao == 'MULTIPLICAÇÃO')
    console.log('O resultado de ' + numeroA + ' * ' + numeroB + ' = ' + resultadoMul)

    if(operacao == 'DIVISÃO')
    console.log('O resultado de ' + numeroA + ' / ' + numeroB + ' = ' + resultadoDiv)
}

nomePrograma()

// SOMA
pulaLinha()
tituloOperacao('SOMA')
resultado('SOMA')

// SUBTRAÇÃO
pulaLinha()
tituloOperacao('SUBTRAÇÃO')
resultado('SUBTRAÇÃO')

// MULTIPLICAÇÃO
pulaLinha()
tituloOperacao('MULTIPLICAÇÃO')
resultado('MULTIPLICAÇÃO')

// DIVISÃO
pulaLinha()
tituloOperacao('DIVISÃO')
resultado('DIVISÃO')

pulaLinha()
console.log('****************************************')