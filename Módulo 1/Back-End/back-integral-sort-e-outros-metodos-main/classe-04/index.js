const palavras = ['laaaaa', 'c', 's', 'c', 'o'];

const existe = palavras.some(x => x.length > 5)

if (existe) {
    console.log('existe palavra inválida')
} else {
    console.log('array validado')
}

