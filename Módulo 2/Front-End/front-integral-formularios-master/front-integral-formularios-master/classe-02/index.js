const celular = document.querySelector('#celular')
const formulario = document.querySelector('form')
let celularFormatado
const senha = document.querySelector('#senha')
const senha2 = document.querySelector('#senha2')

formulario.addEventListener('submit', (event) => {
    celularFormatado = Number(celular.value)
    if (isNaN(celularFormatado)) {
        event.preventDefault()
        window.alert('Inira somente números no celular!')
    }

    if (senha2.value != senha.value) {
        event.preventDefault()
        window.alert('As senhas devem ser iguais')
    }
})


