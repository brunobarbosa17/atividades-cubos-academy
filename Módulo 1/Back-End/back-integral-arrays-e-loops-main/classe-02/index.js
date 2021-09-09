const letras = ["A", "a", "B", "C", "E", "e"];
let qntd=0;

for (let index = 0; index < letras.length; index++) {
    if (letras[index] === 'e' || letras[index] === 'E') {
        qntd++;
    }    
}

console.log(`Existem ${qntd} letras 'e' ou 'E'`)