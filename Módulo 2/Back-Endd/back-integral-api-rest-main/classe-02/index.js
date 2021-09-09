const express = require('express')
const app = express()
app.use(express.json())

const livros = [
    {
        id: 1,
        titulo: "A Odisséia de Jonas",
        autor: "Thomas Crawling",
        ano: 2001,
        numPaginas: 197
    },
    {
        id: 2,
        titulo: "Jonas e a sociedade escondida",
        autor: "Claire Crawling",
        ano: 2004,
        numPaginas: 158
    }
];

const error = [
    {
    "mensagem": "O valor do parâmetro ID da URL não é um número válido."
    },
    {
    "mensagem": "Não existe livro para o ID informado."
    },
]

let id = livros.length+1

app.get('/livros', (req, res) => {
    res.json(livros)
})

app.get('/livros/:idLivro', (req, res) => {
    const idLivro = Number(req.params.idLivro)
    console.log(idLivro)

    if (idLivro === undefined || idLivro === NaN || idLivro < 0 || !Number.isInteger(idLivro)) {
        res.json(error[0])
    } else if (!livros.find(x => x.id === idLivro)) {
        res.json(error[1])
    } else {
        const livro = livros.find(x => x.id == req.params.idLivro)
        
        res.send(livro)
    }
})

app.post('/livros', (req, res) => {
    const livro = req.body;

    livros.push({
        id: id,
        titulo: livro.titulo,
        autor: livro.aautor,
        ano: livro.ano,
        numPaginas: livro.numPaginas
    })

    id++
    res.json(livros)
})


app.put('/livros', (req, res) => {
    
})


app.delete('/livros/:idLivro', (req, res) => {
    const idLivro = Number(req.params.idLivro)
    
    if (idLivro > livros.length) {
        res.json({
            "mensagem": "Não existe livro a ser removido para o ID informado."
        })
    } else if (livros.find(x => x.id === idLivro)) {
        const livro = livros.find((livro) => livro.id === idLivro)
        const indice  = livros.indexOf(livro)
        livros.splice(indice, 1)
        res.json(livros)
    } else {
        res.json({
            "mensagem": "Não existe livro a ser removido para o ID informado."
        })
    }
})

app.listen(8000)