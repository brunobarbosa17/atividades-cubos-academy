const axios = require('axios')

async function obterLogradouro(cep) {
    const promise = axios.get(`https://viacep.com.br/ws/${ cep }/json/`)
    const response = await promise;
    return response.data.logradouro
}

async function exibirLogradouros1(ceps) {
    for (const cep of ceps) {
        console.log(await obterLogradouro2(cep))
    }
}

async function exibirLogradouros2(ceps) {
    ceps.forEach(async (cep) => {
        console.log(cep, '=>', await obterLogradouro(cep))
    });
}

async function exibirLogradouros3(ceps) {
    const list = ceps.map(async (cep) => {
        console.log(cep, '=>', await obterLogradouro(cep))
    });

    console.log(list)
}

async function exibirLogradouros4(ceps) {
    await Promise.all(
        ceps.map(async (cep) => {
            console.log(cep, '=>', await obterLogradouro(cep))
    }));
}

exibirLogradouros4(["41385730", "40140650"]).then(() => console.log('terminou'))