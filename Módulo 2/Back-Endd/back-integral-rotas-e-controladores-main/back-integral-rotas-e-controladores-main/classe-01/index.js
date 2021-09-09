const express = require('express')
const app = express()
app.use(express.json())
const imoveis = require('./imoveis')
const roteador = require('./roteador')


app.use(roteador)

app.listen(8000)