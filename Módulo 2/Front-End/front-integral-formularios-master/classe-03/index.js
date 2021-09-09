const musicaPesquisar = document.querySelector('.musica')
const formulario = document.querySelector('form')

formulario.addEventListener('change', (event) => {
    musicaPesquisar.classList.add('on')
    console.log(event.target.value)
    musicaPesquisar.value = event.target.value
    
})

