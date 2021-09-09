const numeros = [5, 7, 13, 17, 26, 34, 118, 245];
let sub = []

for(let i = 1; i < numeros.length; i++) {
    if (numeros[i] > 10 && numeros[i] < 20 || numeros[i] > 100) sub.push(numeros[i])
}

console.log(sub)


