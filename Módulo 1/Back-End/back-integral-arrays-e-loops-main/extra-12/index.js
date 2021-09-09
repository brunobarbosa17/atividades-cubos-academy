const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];


while (filaDeFora.length > 0 && filaDeDentro.length < 5) {
    let ultimo = filaDeFora.shift()
    filaDeDentro.push(ultimo)
}

console.log(filaDeDentro)
console.log(filaDeFora)