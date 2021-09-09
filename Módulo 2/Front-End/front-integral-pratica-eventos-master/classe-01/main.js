const abrirMenu = document.querySelector('#menu')
const nav = document.querySelector('.nav-esquerda')
const hiddens = document.querySelectorAll('.hidden')

abrirMenu.addEventListener('click', () => {
    nav.classList.toggle('expandido')
    hiddens.forEach(elementos => {
        elementos.classList.toggle('hidden')
    })
})


const imagens = document.querySelectorAll('.imgs figure img')
const modal = document.querySelector('.modal')
const imgModal = document.querySelector('#imgmodal')
const modalAberta = document.querySelector('.modal open')

imagens.forEach(img => {
    img.addEventListener('click', (e) => {
        modal.classList.toggle('open')
        imgModal.src = e.target.src
        
    })
})


//fechar modal
const fecharModal = document.querySelector('#close-modal')
fecharModal.addEventListener('click', () => {
    modal.classList.remove('open')
})


// row

const proxImagem = document.querySelector('#next')
const prevImagem = document.querySelector('#prev')

proxImagem.addEventListener('click', (event) => {
    let i = Math.floor(Math.random() * 10);
    if (i === 0) {
        i = Math.floor(Math.random() * 10)
    }
    imgModal.src = `assets/gallery/image ${ i }.png`
})

prevImagem.addEventListener('click', (event) => {
    let i = Math.floor(Math.random() * 10);
    if (i === 0) {
        i = Math.floor(Math.random() * 10)
    }
    imgModal.src = `assets/gallery/image ${ i }.png`
})