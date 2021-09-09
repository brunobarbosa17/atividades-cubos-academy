const pokemon = document.querySelector('#pokemon')
const nomePoke = document.querySelector('#nomePokemon')
const imgPoke = document.querySelector('#imgPokemon')


const habDiv = document.querySelector('.resposta')

const hab1 = document.querySelector('#habilidade1')
const hab2 = document.querySelector('#habilidade2')

pokemon.addEventListener('change', () => {
    const promise = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.value.toLowerCase()}`)

    promise.then((response) => {
        const promiseBody = response.json();
        
        promiseBody.then((body) => {
            let nome = body.name[0].toUpperCase()
            for (let i = 1; i < body.name.length; i++) {
                nome+=body.name[i]
            }
            nomePoke.innerHTML = nome
            imgPoke.src = body.sprites.front_default

            hab1.textContent = body.abilities[0].ability.name
            hab2.textContent = body.abilities[1].ability.name

            
            habDiv.style.display = 'inline'

        })
    })
    
})