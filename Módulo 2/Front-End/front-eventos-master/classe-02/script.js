const input = document.querySelectorAll('input')
let acertos = 0

input.forEach(inputs => {
    inputs.addEventListener('change', () => {
        if (inputs.value == inputs.dataset.resposta) {
            inputs.classList.add('acerto')
            acertos++
            window.alert(`Você acertou uma questão!`)
        }
    })
})