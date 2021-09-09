const express = require('express')
const rotas = express()
const consultar = require('./controladores/recurso')

rotas.get('/empresas/:dominioEmpresa', consultar.consultarInfo)

module.exports = rotas;