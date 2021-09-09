const instanciaAxios = require('axios')
const fs = require('fs/promises')

async function consultar(req, res) {
    const ip = req.params.ip;

    const pedido = await instanciaAxios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=b62c5d20ae3940b08576c1de94226a91&ip_address=${ip}`)
    

    if (!pedido.data.city) {
        res.status(400)
        res.json({
            erro: 'O endereço de ip é inválido'
        })
    } else {
        const arquivoVotos = fs.readFile('votos.json')
        arquivoVotos.then((data) => { })
        const resultadoVotos = await (await arquivoVotos).toString()
        const votosObjeto = JSON.parse(resultadoVotos)
        votosObjeto.push(req.body,pedido.data.ip_address)
        await fs.writeFile('votos.json', JSON.stringify(votosObjeto))
        console.log(votosObjeto)
        res.send(pedido.data)
    }

 
}

module.exports = {consultar};