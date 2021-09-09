const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

/*
let maior = cidades[0]
for (let i = 1; i < cidades.length; i++) {
    if (cidades[i].length > maior.length) {
      maior = cidades[i]
  }
}*/

const maior = cidades.reduce((acc, item) => {
    if (item.length > acc.l) {
        acc = item
    } else {
        return acc
    }
    return acc;
})
console.log(maior)