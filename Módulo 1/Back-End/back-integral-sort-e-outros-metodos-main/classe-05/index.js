const palavras = ["arroz", "feijão", "carne", "cervej", "macarrão"]

const permite = palavras.some(x => x === 'cerveja' || x === 'vodka')


if (permite) {
    console.log('revise sua lista, joão. possui bebida com venda proibida!')
} else {
    console.log('tudo certo, vamos as compras!')
}