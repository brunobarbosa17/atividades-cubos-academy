const cpf = "12345678900";
const cnpj = "12345678000199";
let cpfFormatado
let cnpjFormatado

if (cpf.length == 11) {
    cpfFormatado = cpf.split("")
    cpfFormatado.splice(3, 0, ".")
    cpfFormatado.splice(7, 0, ".")
    cpfFormatado.splice(11, 0, "-")
    cpfFormatado = cpfFormatado.join("")
    console.log(cpfFormatado)
} else {
    console.log('CPF Inválido')
}


if (cnpj.length == 14) {
    cnpjFormatado = cnpj.split("")
    cnpjFormatado.splice(2,0,".")
    cnpjFormatado.splice(6, 0, ".")
    cnpjFormatado.splice(10, 0, "/")
    cnpjFormatado.splice(15, 0, "-")
    cnpjFormatado = cnpjFormatado.join("")
    console.log(cnpjFormatado)
} else {
    console.log("CNPJ Inválido")
}