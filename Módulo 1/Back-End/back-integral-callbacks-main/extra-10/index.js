const notas = [6, 20, 33, 454, 8, 9, 9, 6, 8, 9, 20, 20, 33]

const notas2 = notas.filter((x, i) => { return notas.indexOf(x) === i;});

console.log(notas2)