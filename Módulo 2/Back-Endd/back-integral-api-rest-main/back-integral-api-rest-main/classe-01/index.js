const express = require('express')
const app = express()

const convidados = [
    "Carlos",
    "Amanda",
    "Fernanda",
    "Juliana",
    "Lucas",
    "Roberto"
]

const error = {
    "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."
}

const errorDelete = {
    "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."
}

const sucessDelete = {
    "mensagem": "Convidado removido."
}


app.get('/convidados', (req, res) => {
    
    res.send(convidados)
})

app.get('/convidados/:nomeConvidado', (req, res) => {
    const convidado = convidados.filter(nome => nome === req.params.nomeConvidado)
    if (convidados.indexOf(req.params.nomeConvidado) >= 0) {
        res.send('Convidado presente')
    } else {
        res.send('O convidado buscado não está presente na lista')
    }
})

app.post('/convidados/:nomeConvidado', (req, res) => {
    if (convidados.indexOf(req.params.nomeConvidado) >= 0) {
        res.json(error)        
    } else {
        convidados.push(req.params.nomeConvidado)
        res.json('Convidado adicionado.')            
    }
})

app.delete('/convidados/:nomeConvidado', (req, res) => {
    if (convidados.indexOf(req.params.nomeConvidado) >= 0) {
        const indice = convidados.indexOf(req.params.nomeConvidado)
        convidados.splice(indice , 1)
        res.json(sucessDelete)        
    } else {
        res.json(errorDelete)
    }
})


app.listen(8000)