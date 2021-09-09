const express = require('express')

const app = express()

app.get('/somar', (req, res) => {
    let n1 = parseInt(req.query.num1)
    let n2 = parseInt(req.query.num2)

    console.log(n1+n2)
    res.send(`${n1+n2}`)
})

app.get('/subtrair', (req, res) => {
    const n1 = parseInt(req.query.num1)
    const n2 = parseInt(req.query.num2)


    res.send(`${n1-n2}`)
})

app.get('/multiplicar', (req, res) => {
    const n1 = parseInt(req.query.num1)
    const n2 = parseInt(req.query.num2)


    res.send(`${n1*n2}`)
})

app.get('/dividir', (req, res) => {
    const n1 = parseInt(req.query.num1)
    const n2 = parseInt(req.query.num2)


    res.send(`${n1/n2}`)
})


app.listen(8000)