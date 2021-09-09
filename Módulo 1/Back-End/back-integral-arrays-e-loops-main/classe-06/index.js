const original = [3, 4, 7, 8, 1, 6, 5, 10];
let soma = 0;

for (let i = 0; i < original.length; i++) {
    if (original[i] % 2 == 0) {
        soma += original[i]
    }
}

console.log(soma)
