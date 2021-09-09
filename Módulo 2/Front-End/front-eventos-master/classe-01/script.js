const input = document.querySelector('input')
const elementos = document.querySelectorAll('li')

input.addEventListener('keydown', buscar)



function buscar(event) {

    if (event.code === 'Enter') {
        
        elementos.forEach(elemento => {
            if (input.value && elemento.textContent != input.value) {
                elemento.classList.add('escondido')
                
            } else if (elemento.textContent == input.value) {
                elemento.classList.remove('escondido')
            }

        })

        input.value = ''
    }
}