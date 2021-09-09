const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
]
/*let nomes2 = []

for (let i = 0; i < x.length; i++) {
    if (x[i][0] === 'A' || x[i][0] === 'a') nomes2.push(x[i])
}*/

const nomes2 = nomes.filter(x => {
    return x[0] === 'A' || x[0] === 'a'
})

console.log(nomes2)

