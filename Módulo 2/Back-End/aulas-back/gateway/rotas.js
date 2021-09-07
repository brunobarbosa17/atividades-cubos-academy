const express = require('express')
const rotas = express()
const pedidos = require('./controladores/pedidos')

rotas.post('/criar-pedido', pedidos.criarPedido)
rotas.get('/consultar-pedido/:id', pedidos.consultarPedido)

module.exports = rotas;