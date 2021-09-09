const nome = 'Guido Cerqueiraaaaaaaaaaaaaaaaaaaaaa';

function gerar(nome) {
    nome = nome.toLowerCase()
    nome = nome.split("")
    nome.unshift('@')
    while (nome.length > 14) {
        nome.pop()
    }
    for (let i = 0; i < 14; i++) {
        if (nome[i] === ' ') {
            nome.splice(i, 1)
      }
    }

    nome = nome.join("")
    console.log(nome)
}

gerar(nome)