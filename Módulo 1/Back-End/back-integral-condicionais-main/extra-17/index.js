//valor do produto comprado.
const valorDoProduto = 1000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const totalPago = valorDoProduto / quantidadeDoParcelamento

const falta = valorDoProduto - valorPago

console.log(`Restam ${falta/100} parcelas de R$${falta/quantidadeDoParcelamento*10}`)