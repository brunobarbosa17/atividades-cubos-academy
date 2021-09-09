const express = require('express')
const app = express()
const axios = require('axios')
const fs = require('fs/promises')
const fs2 = require('fs')
const enderecos = require('./enderecos')


app.get('/enderecos', async (req, res) => {
    const arquivoEnderecos = fs.readFile('enderecos.json')
    arquivoEnderecos.then(data => res.send(data))
    
})

app.get('/enderecos/:cep', async (req, res) => {
    let cep = req.params.cep.split('')
    cep.splice(5, 0, "-")
    cep = cep.join('')
    
    const response = await axios.get(`https://viacep.com.br/ws/${ req.params.cep }/json/`)

    const arquivoEnderecos = fs.readFile('enderecos.json')
    arquivoEnderecos.then((data) => { })
    
    const enderecos2 = await (await arquivoEnderecos).toString() // cria um objeto com o resultado
    const enderecosObj = JSON.parse(enderecos2) // transforma json em objeto
    
    const novoEnderecoExiste = enderecosObj.find((x) => x.cep == cep) // verifica se existe

    // let novo = fs2.createWriteStream('enderecos.json', { flag: 'a' })

    if (!novoEnderecoExiste) {
        enderecosObj.push(response.data)
        await fs.writeFile('enderecos.json', JSON.stringify(enderecosObj))
        console.log('nao existe')
        //novo.write(enderecosObj)
    }


    res.json(enderecosObj)
})


app.listen(8000)