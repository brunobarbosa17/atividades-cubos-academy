const express = require('express');
const roteador = express();
const imoveis = require('./imoveis')

roteador.get('/imoveis', imoveis.exibirTodosImoveis)

roteador.get('/imoveis/:idImovel', imoveis.exibirUmImovel)

module.exports = roteador;