const express = require('express');
const roteador = require('./roteador')
const app = express();
const {validarSenha} = require('./intermediarios')

const alunos = require('./controladores/recurso')
app.use(express.json());

app.use(validarSenha)
app.use(roteador)


app.listen(8000)