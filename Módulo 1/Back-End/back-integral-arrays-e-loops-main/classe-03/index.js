const numeros = [54, 22, 14, 10, 284];
let qntd = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        qntd = true;
        console.log(i)
        break;
    }
}

if (!qntd) {
    console.log(-1)
}

