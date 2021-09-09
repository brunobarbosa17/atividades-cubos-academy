const express = require('express')
const roteador = express()
const alunos = require('./controladores/recurso')


roteador.get('/alunos', alunos.consultarTodosOsAlunos)
roteador.get('/alunos/:idAluno', alunos.consultarUmAluno)
roteador.post('/alunos', alunos.criarAluno)

roteador.delete('/alunos/:idAluno', alunos.excluirAluno)

module.exports = roteador;