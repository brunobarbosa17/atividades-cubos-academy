function calculaSoma(lista) {
    let soma = 0

    for (let i = 0; i < lista.length; i++) {
        soma += lista[i]
    }
    return soma
}

module.exports = {
    calculaSoma,
    outroValor: "oi"
}