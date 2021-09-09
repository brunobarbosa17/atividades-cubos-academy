const pessoa = {
    identificador: "123",
    nome: "José silva costa",
    email: "      jose@email.com  ",
    tags: ['financeiro', 'administrativo', 'geral'],
}

function format(pessoa) {
    if (pessoa.identificador.length < 6) {
        pessoa.identificador = pessoa.identificador.padStart(6, "0")
    }
    
    pessoa.nome = pessoa.nome.split("")
    for (let i = 0; i < pessoa.nome.length; i++) {
        if (pessoa.nome[i] === ' ') {
            pessoa.nome[i + 1] = pessoa.nome[i + 1].toUpperCase()
        }
    }
    pessoa.nome = pessoa.nome.join("")
    pessoa.email = pessoa.email.trim()
    pessoa.tags = pessoa.tags.join(',')
    console.log(pessoa.identificador, pessoa.nome, pessoa.email, pessoa.tags)
}

format(pessoa)
