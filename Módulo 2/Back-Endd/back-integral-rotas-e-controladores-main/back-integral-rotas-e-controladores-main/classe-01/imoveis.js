const imoveis = [
  {
    id: 1,
    logradouro: "Av. Getúlio Vargas",
    numero: 1458,
    complemento: "Térreo",
    bairro: "Funcionários",
    cidade: "Belo Horizonte",
    cep: "30112-021"
  },
  {
    id: 2,
    logradouro: "Av. Paulista",
    numero: 1009,
    complemento: "16º andar",
    bairro: "Cerqueira César",
    cidade: "São Paulo",
    cep: "01310-100"
  }
];

function exibirTodosImoveis(req,res) {
    res.json(imoveis)
}

function exibirUmImovel(req,res) {
    const imovel = imoveis.find((imovel) => imovel.id === Number(req.params.idImovel))
    
    if (!imovel) {
        res.status(404)
        console.log(req.params.idImovel)
        res.json({
            erro: `O imóvel com id ${ req.params.idImovel } não existe!`
        })
        return;
    }

    res.json(imovel)
}

module.exports = {exibirTodosImoveis, exibirUmImovel};