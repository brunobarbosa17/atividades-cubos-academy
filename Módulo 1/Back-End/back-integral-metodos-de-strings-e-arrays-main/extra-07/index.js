const celular = 99918888;
let celularFormatado = celular.toString()
celularFormatado = celularFormatado.split("")



if (celularFormatado[0] == 7 && celularFormatado[1] == 1) {
    celularFormatado.unshift('(')
    celularFormatado.splice(3, 0, ')')
    celularFormatado.splice(4, 0, ' ')
    celularFormatado.splice(5, 0, '9')
    celularFormatado.splice(6, 0, ' ')
    celularFormatado.splice(11, 0, '-')
    celularFormatado = celularFormatado.join("")
    console.log(celularFormatado)
} else {
    celularFormatado.unshift('9')
    celularFormatado.splice(1, 0, ' ')
    celularFormatado.splice(6, 0, '-')
    celularFormatado = celularFormatado.join("")
    console.log(celularFormatado)
}
