const express = require('express')

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let i = 0

const app = express()

app.get('/rodada', (req, res) => {
    res.send(jogadores[i])
    i++
    if(i===jogadores.length) i = 0
})


app.get('/remover', (req, res) => {
    const i = parseInt(req.query.indice)
    
    if (jogadores[i] === undefined) {
        res.send(`Não existe jogador no índice informado (${i}) para ser removido.`)
    } else {
        jogadores.splice(i, 1)
        res.send(jogadores)
    }
    
})

app.get('/adicionar', (req, res) => {
    const nome = req.query.nome
    const i = parseInt(req.query.indice)
    
    if (i > jogadores.length) {
        res.send(`O índice informado (${i}) não existe no array. Novo jogador não adicionado.`)   
    } else {        
        if (!Number.isInteger(i)) {
            jogadores.push(nome)
        } else {
            jogadores.splice(i, 0, nome)
            
        }

        res.send(jogadores)
    }
    
})

app.listen(8000)