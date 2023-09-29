const { validaSenha, validaEmail } = require('../utils/validators')
require('@jest/globals')

describe('Testes de validação', () => {

    it('Senhafor7& deberia pasar no teste de senha', async () => {
        const senha = 'Senhafor7&'
        const resultado = await validaSenha(senha)
        expect(resultado).toBe(true)
    })
    it('umaSenha76# deberia pasar no teste de senha', async () => {
        const senha = 'umaSenha76#'
        const resultado = await validaSenha(senha)
        expect(resultado).toBe(true)
    })
    it('asDljdmas79@  deberia pasar no teste de senha', async () => {
        const senha = 'asDljdmas79@'
        const resultado = await validaSenha(senha)
        expect(resultado).toBe(true)
    })
    it('aslGfd*s23 deberia pasar no teste de senha', async () => {
        const senha = 'aslGfd*s23'
        const resultado = await validaSenha(senha)
        expect(resultado).toBe(true)
    })


    it('email@dominio.com deberia pasar o teste de email', async () => {
        const email = 'email@dominio.com'
        const resultado = await validaEmail(email)
        expect(resultado).toBe(true)
    })

    it(' email@dominio.com.br deberia pasar o teste de email', async () => {
        const email = 'email@dominio.com.br'
        const resultado = await validaEmail(email)
        expect(resultado).toBe(true)
    })



})