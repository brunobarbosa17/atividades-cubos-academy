const olho = document.querySelector('#olho')
const inputPass = document.querySelector('.password')


olho.addEventListener('click', () => {
    console.log(olho.classList.contains('olho-fechado'))
    
    if (olho.classList.contains('olho-fechado')) {
        olho.src = 'assets/olho-aberto.svg'
        olho.classList.remove('olho-fechado')
        olho.classList.add('olho-aberto')
        console.log('oi')
        inputPass.type = 'text'
    } else {
        olho.src = 'assets/olho-fechado.svg'
        olho.classList.remove('olho-aberto')
        olho.classList.add('olho-fechado')
        inputPass.type = 'password'
    }
})