const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maior = numeros.reduce((acc, item) => {
    if (item > acc) {
        acc = item
    } else {
        return acc;
    }
    return acc;
})

console.log(maior)