const express = require('express');
const roteador = express();
const instrutores = require ('./controladores/instrutores')

roteador.get('/instrutores', instrutores.consultarTodosOsInstrutores)
roteador.get('/instrutores/:idConsultado', instrutores.consultarUmInstrutor)
roteador.post('/instrutores', instrutores.criarInstrutor)
/* PATCH */
roteador.patch('/instrutores/:idConsultado', instrutores.editarInstrutor)
/* PUT */
roteador.put('/instrutores/:idConsultado', instrutores.substituirInstrutor)
// DELETE
roteador.delete('/instrutores/:idConsultado', instrutores.excluirInstrutor)


module.exports = roteador