const express = require('express');
const roteador = require('./roteador')
const swaggerUi = require('swagger-ui-express')
const { logarRequisicao, travaDeSenha } = require('./intermediarios')

const app = express();

app.use(express.json());
app.use(logarRequisicao);
app.use(travaDeSenha);
app.use(roteador);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(require('./swagger.json')))

app.listen(8000)