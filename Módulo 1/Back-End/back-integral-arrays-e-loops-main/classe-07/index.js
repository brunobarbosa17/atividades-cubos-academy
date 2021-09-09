const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let nomesA = []

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i][0] === 'A' || nomes[i][0] === 'a') {
        nomesA.push(nomes[i])
    }
}

console.log(nomesA)