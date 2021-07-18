const { assert } = require('chai')
const multiplicacao = require  ('../src/operacoes/multiplicacao')

describe('Teste do Método Multiplicacao', function(){

    it('Deve retornar 8 quando os valores forem 2 e 4',() =>{
    
        const resultadoMultiplicacao = multiplicacao(2,4)
        assert.equal(resultadoMultiplicacao,8)
    })
    it('Deve retornar 0 quando os valores forem 0 e 0',() =>{
    
        const resultadoMultiplicacao = multiplicacao(0,0)
        assert.equal(resultadoMultiplicacao,0)
    })
    it('Deve retornar 0 quando os valores forem 1 e 0',() =>{
    
        const resultadoMultiplicacao = multiplicacao(1,0)
        assert.equal(resultadoMultiplicacao,0)
    })
    it('Deve retornar 5 quando os valores forem 1 e 5',() =>{
    
        const resultadoMultiplicacao = multiplicacao(1,5)
        assert.equal(resultadoMultiplicacao,5)
    })
    it('Deve retornar -4 quando os valores forem -2 e 2',() =>{
    
        const resultadoMultiplicacao = multiplicacao(-2,2)
        assert.equal(resultadoMultiplicacao,-4)
    })
    it('Deve retornar 4 quando os valores forem -2 e -2',() =>{
    
        const resultadoMultiplicacao = multiplicacao(-2,-2)
        assert.equal(resultadoMultiplicacao,4)
    })
    it('Deve retornar 2 quando os valores forem 4 e 0.5',() =>{
    
        const resultadoMultiplicacao = multiplicacao(4,0.5)
        assert.equal(resultadoMultiplicacao,2)
    })
    it('Deve retornar -1 quando os valores forem 2 e -0.5',() =>{
    
        const resultadoMultiplicacao = multiplicacao(2,-0.5)
        assert.equal(resultadoMultiplicacao,-1)
    })
})