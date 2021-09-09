const img = document.querySelectorAll('main img')
const imagemModal = document.querySelector('.img-modal');
const divModal = document.querySelector('.modal')

img.forEach(imagem => {
    imagem.addEventListener('click', (event) => {
        divModal.style.visibility  = 'visible'
        imagemModal.src = event.target.src
        
})
})

divModal.addEventListener('click', () => {
    divModal.style.visibility  = 'hidden'
})

