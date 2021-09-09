const div = document.querySelector('.resposta')
const form = document.querySelector('form')

const res1 = document.querySelector('#res1')
const res2 = document.querySelector('#res2')
const res3 = document.querySelector('#res3')



form.addEventListener('change', (event) => {
    console.log(event.target.value)

    const promise = fetch(`https://www.mercadobitcoin.net/api/${ event.target.value.toUpperCase() }/ticker`)
    
    promise.then((response) => {
        const promise = response.json();

        promise.then(body => {
            div.style.display = 'flex'

            res1.innerHTML = `O maior preço da cripto <strong>${event.target.value.toUpperCase()}</strong> unitário nas últimas 24 horas foi: <strong>${ Number(body.ticker.high).toFixed(2) }</strong>`

            res2.innerHTML = `A quantidade negociada da cripto <strong>${event.target.value.toUpperCase()}</strong> nas últimas 24 horas foi: <strong>${Number(body.ticker.vol).toFixed(2)}</strong>`

            res3.innerHTML = `O maior preço da cripto <strong>${event.target.value.toUpperCase()}</strong> de oferta de compra nas últimas 24 horas foi: <strong>${Number(body.ticker.buy).toFixed(2)}</strong>`
        })
    })
})