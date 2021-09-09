const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];

const fs = require('fs')
const msg = '!!!deu certo!!!'
const buffer = fs.writeFile('./meuarquivo.txt', msg, () => {
    console.log('foi')
})