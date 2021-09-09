const modal = document.querySelector('.modal')
const botao = document.querySelector('.icon')

botao.addEventListener('click', () => {
    modal.classList.toggle('fechada')
})