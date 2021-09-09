//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento == "credito") {
    const total = valorDoProduto - (valorDoProduto * 5) / 100
    console.log('Valor a ser pago: R$' + total.toFixed())

} else if(tipoDePagamento == "cheque") {
    const total = valorDoProduto - (valorDoProduto * 3) / 100
    console.log('Valor a ser pago: R$' + total.toFixed())

} else if(tipoDePagamento == "debito" || tipoDePagamento == "dinheiro") {
    const total = valorDoProduto - (valorDoProduto * 10) / 100
    console.log('Valor a ser pago: R$' + total.toFixed())
}