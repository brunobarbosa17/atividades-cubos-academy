const input = document.querySelector('input')
const root = document.querySelector('body')

const promise = fetch('https://restcountries.eu/rest/v2/all').then(response => {
    const promiseBody = response.json()
    promiseBody.then(body => {        
        
        body.forEach((user) => {
            const div = document.createElement('div')
            div.classList.add('paises')
            
            const paisNome = document.createElement('h2')
            paisNome.textContent = user.name

            const regiao = document.createElement('span')
            regiao.textContent = user.region

            const capital = document.createElement('span')
            capital.textContent = user.capital

            const populacao = document.createElement('p')
            populacao.textContent = user.population
                
            const bandeira = document.createElement('img')
            bandeira.src = user.flag

            div.append(paisNome,regiao,capital,populacao,bandeira)
            root.append(div)
        })
    })
})


input.addEventListener('keydown', (e) => {
    const divPaises = document.querySelectorAll('.paises')
    divPaises.textContent = ''

    if (e.target.value === '') {
    const promise = fetch('https://restcountries.eu/rest/v2/all').then(response => {
    const promiseBody = response.json()
    promiseBody.then(body => {        
        body.forEach((user) => {
            const div = document.createElement('div')
            div.classList.add('paises')
            
            const paisNome = document.createElement('h2')
            paisNome.textContent = user.name

            const regiao = document.createElement('span')
            regiao.textContent = user.region

            const capital = document.createElement('span')
            capital.textContent = user.capital

            const populacao = document.createElement('p')
            populacao.textContent = user.population
                
            const bandeira = document.createElement('img')
            bandeira.src = user.flag

            div.append(paisNome,regiao,capital,populacao,bandeira)
            root.append(div)
        })
    })
})
    }


    if (e.key === 'Enter' && input.value.length != 0) {
    const promise = fetch(`https://restcountries.eu/rest/v2/name/${input.value}`).then(response => {
    const promiseBody = response.json()
        promiseBody.then(body => {      
        divPaises.forEach(divs => {
            divs.remove()
        })
        
        const div = document.createElement('div')
        div.classList.add('paises')
        
        const paisNome = document.createElement('h2')
        paisNome.textContent = body[0].name

        const regiao = document.createElement('span')
        regiao.textContent = body[0].region

        const capital = document.createElement('span')
        capital.textContent = body[0].capital

        const populacao = document.createElement('p')
        populacao.textContent = body[0].population
            
        const bandeira = document.createElement('img')
        bandeira.src = body[0].flag

        div.append(paisNome,regiao,capital,populacao,bandeira)
        root.append(div)

        })
    })
        
    }

});