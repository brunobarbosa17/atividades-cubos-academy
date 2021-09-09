const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const cidadesFiltrado = cidades.filter(x => {
    return x.length <= 8
}).join(', ')

console.log(cidadesFiltrado)