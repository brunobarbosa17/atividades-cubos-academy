const numeros = [2, 122, 4, 8,8, 8, 44];

const valid = numeros.every(x => x % 2 === 0)

if (valid) {
    console.log('array válido')
} else {
    console.log('array inválido')
}