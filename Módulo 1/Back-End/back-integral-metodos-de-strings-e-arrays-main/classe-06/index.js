const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
let frutasInversa = frutas.reverse()
frutasInversa = frutasInversa.join(", ")
console.log(frutasInversa)

let frutas2 = frutas
frutas2.shift()
frutas2.pop()
frutas2 = frutas2.reverse()
frutas2.push("Melão")
console.log(frutas2)