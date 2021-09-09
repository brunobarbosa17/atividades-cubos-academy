const express = require('express')
const rotas = express()
const votacao = require('./controladores/recurso')

rotas.post('/votacao/:pais/:ip', votacao.consultar)


module.exports = rotas;