const numeros = [3, 4, 1, 8, 11, 7, 5];
let maior = numeros[0]

for(let i = 1; i < numeros.length; i++) {
    if (numeros[i] >= maior) {
        maior = numeros[i]
    }
}

console.log (maior)
