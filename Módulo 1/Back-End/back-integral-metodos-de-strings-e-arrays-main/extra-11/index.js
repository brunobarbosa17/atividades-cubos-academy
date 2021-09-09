const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function capture(array,num) {
    console.log(`${ array[num] } - ${ array[num + 1] } - ${ array[num + 2]}`)
}

capture(nomes, posicao)