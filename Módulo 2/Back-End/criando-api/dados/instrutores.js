const fs = require('fs');

function salvarInstrutores() {
    const json = JSON.stringify(listaDeInstrutores, null, 2)
    fs.writeFileSync('dados.json',json)
}

let listaDeInstrutores;

try {
    listaDeInstrutores = JSON.parse(fs.readFileSync('dados.json').toString())
} catch {
    const listaDeInstrutores = [
        {
            id: 1,
            nome: 'Bruno',
            idade: 22,
            areaDeAtuacao: "Full--stack",
        },
        {
            id: 2,
            nome: 'Lucas',
            idade: 23,
            areaDeAtuacao: "Front",
        },
        {
            id: 3,
            nome: 'Barbosa',
            idade: 24,
            areaDeAtuacao: "Não atua",
        },
        
    ]
}



module.exports = {
    listaDeInstrutores,
    salvarInstrutores    
};