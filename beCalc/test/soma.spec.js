const {assert} = require('chai')
const soma = require('../codigoBeCalc/soma')

describe('Testes da beCalc',() => {
    it('O resultado da soma de 5 e 2 deve ser 7')
        const resultadoSoma = soma(5,2)
        assert.equal(resultadoSoma, 7)
    
})

// subtracao, divisao, multiplicacao