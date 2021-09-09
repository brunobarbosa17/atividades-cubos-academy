const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];
let menor = []


for(let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] < arrayB[i]) {
        menor.push(arrayA[i])
    } else {
        menor.push(arrayB[i])
    }
}

console.log(menor)