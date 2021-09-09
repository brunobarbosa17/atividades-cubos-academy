const express = require('express')

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let i = 0

const app = express()

app.get('/rodada', (req, res) => {
    res.send(jogadores[i])
    i++
    if(i===jogadores.length) i = 0
})

app.listen(8000)