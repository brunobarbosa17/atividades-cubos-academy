//const instanciaAxios = require('./api')
const instanciaAxios = require('axios')
const fs = require('fs/promises')

async function consultarInfo(req, res) {
    const domain = req.params.dominioEmpresa;


    const pedido = await instanciaAxios.get(`https://companyenrichment.abstractapi.com/v1/?api_key=4cf7fd50c3dd444dbd88e1caa64bc783&domain=${domain}`)
    

    if (pedido.data.name) {
        const arquivoEmpresas = fs.readFile('empresas.json')
        arquivoEmpresas.then((data) => { })
        
        const objetoConsulta = await (await arquivoEmpresas).toString()
        const teste = JSON.parse(objetoConsulta)
        teste.push(pedido.data)
        await fs.writeFile('empresas.json', JSON.stringify(teste))

    } 

    res.json(pedido.data)
 
}

module.exports = {consultarInfo};