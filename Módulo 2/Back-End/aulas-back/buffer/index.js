const fs = require('fs')

const conteudo = fs.readFileSync('teste.json').toString()
const dados = JSON.parse(conteudo)

console.log(conteudo)
console.log(dados.nomes.push("de Lucas"))
console.log(dados)

const novo = JSON.stringify(dados,null,2)

console.log(novo)

fs.writeFileSync('teste2.json', novo)