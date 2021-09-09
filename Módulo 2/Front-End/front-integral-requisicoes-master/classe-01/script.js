const cepInput = document.querySelector('#cep')
const cidadeInput = document.querySelector('#cidade')
const ruaInput = document.querySelector('#rua')



cepInput.addEventListener('change', () => {
    if (cepInput.value.length < 8) {
        window.alert('Informe os 8 números do CEP!')
        return
    }

    const promise = fetch(`https://viaacep.com.br/ws/${ cepInput.value }/json/`)

    promise.then((response) => {
        const promiseBody = response.json()

        promiseBody.then((body) => {
            cidadeInput.value = body.localidade
            ruaInput.value = body.logradouro
        })
    })
})