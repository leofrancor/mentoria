const { assert } = require('chai')
const subtracao = require  ('../src/operacoes/subtracao')

describe('Teste do Método Subtracao', function(){

    it('Deve retornar -2 quando os valores forem 2 e 4',() =>{
    
        const resultadoSubtracao = subtracao(2,4)
        assert.equal(resultadoSubtracao,-2)
    })
    it('Deve retornar 1 quando os valores forem 2 e 1',() =>{
    
        const resultadoSubtracao = subtracao(2,1)
        assert.equal(resultadoSubtracao,1)
    })
    it('Deve retornar -0.5 quando os valores forem 0.5 e 1',() =>{
    
        const resultadoSubtracao = subtracao(0.5,1)
        assert.equal(resultadoSubtracao,-0.5)
    })
    it('Deve retornar 0 quando os valores forem 1 e 1',() =>{
    
        const resultadoSubtracao = subtracao(1,1)
        assert.equal(resultadoSubtracao,0)
    })
    it('Deve retornar 0 quando os valores forem 0 e 0',() =>{
    
        const resultadoSubtracao = subtracao(0,0)
        assert.equal(resultadoSubtracao,0)
    })
    it('Deve retornar 2 quando os valores forem 1 e -1',() =>{
    
        const resultadoSubtracao = subtracao(1,-1)
        assert.equal(resultadoSubtracao,2)
    })
})