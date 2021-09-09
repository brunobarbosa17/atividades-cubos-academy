const botaoInscrever = document.querySelector('.btn')
const modal = document.querySelector('.modal.escondido')
const botaoSim = document.querySelector('.confirmar')
const botaoNao = document.querySelector('.cancelar')


botaoInscrever.addEventListener('click', () => {
    modal.classList.remove('escondido')
    botaoSim.addEventListener('click', () => {
        botaoInscrever.classList.add('inscrito')
        modal.classList.add('escondido')
        botaoInscrever.textContent = 'INSCRITO'
        
})


    botaoNao.addEventListener('click', () => {
        modal.classList.add('escondido')
        
    })
})
