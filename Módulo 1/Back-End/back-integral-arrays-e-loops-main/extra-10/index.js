const numeros = [8, 11, 4, 1];
let maior = numeros[0]
let menor = numeros[0]

for(let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i]
    }

    if (numeros[i] < menor) {
        menor = numeros[i]
    }
}

console.log(maior-menor)
