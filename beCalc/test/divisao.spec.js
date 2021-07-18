const { assert } = require('chai')
const divisao = require  ('../src/operacoes/divisao')

describe('Teste do Método Divisao', function(){

    it('Deve retornar 0,5 quando os valores forem 2 e 4',() =>{
    
        const resultadoDivisao = divisao(2,4)
        assert.equal(resultadoDivisao,0.5)
    })
    it('Deve retornar 0 quando os valores forem 0 e 1',() =>{
    
        const resultadoDivisao = divisao(0,1)
        assert.equal(resultadoDivisao,0)
    })
    it('Deve retornar -1 quando os valores forem -2 e 2',() =>{
    
        const resultadoDivisao = divisao(-2,2)
        assert.equal(resultadoDivisao,-1)
    })
    it('Deve retornar Infinity quando os valores forem 1 e 0',() =>{
    
        const resultadoDivisao = divisao(1,0)
        assert.equal(resultadoDivisao,Infinity)
    })
    it('Deve retornar 0.3333333333333333 quando os valores forem 1 e 3',() =>{
    
        const resultadoDivisao = divisao(1,3)
        assert.equal(resultadoDivisao,0.3333333333333333)
    })
})