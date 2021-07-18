const { assert } = require('chai')
const soma = require  ('../src/operacoes/soma')

describe('Teste do Método Soma', function(){

    it('Deve retornar 6 quando os valores forem 2 e 4',() =>{
    
        const resultadoSoma = soma(2,4)
        assert.equal(resultadoSoma,6)
    })
    it('Deve retornar 0 quando os valores forem 0 e 0',() =>{
    
        const resultadoSoma = soma(0,0)
        assert.equal(resultadoSoma,0)
    })
    it('Deve retornar 0 quando os valores forem -1 e 1',() =>{
    
        const resultadoSoma = soma(-1,1)
        assert.equal(resultadoSoma,0)
    })
    it('Deve retornar -1 quando os valores forem -2 e 1',() =>{
    
        const resultadoSoma = soma(-2,1)
        assert.equal(resultadoSoma,-1)
    })
    it('Deve retornar 1.5 quando os valores forem 0.5 e 1',() =>{
    
        const resultadoSoma = soma(0.5,1)
        assert.equal(resultadoSoma,1.5)
    })

})