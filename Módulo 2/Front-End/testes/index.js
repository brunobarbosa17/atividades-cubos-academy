const button = document.querySelector('button')
const body = document.querySelector('body')
const temaInicial = localStorage.getItem('tema')
button.textContent = temaInicial === 'claro' ? '🌞' : '🌚';
body.style.setProperty('--cor-de-fundo', temaInicial === 'claro' ? "#FFF" : '#000')
body.style.setProperty('--cor-de-texto', temaInicial === 'claro' ? "#000" : '#FFF')

button.addEventListener('click', () => {
    button.textContent = button.textContent === '🌞' ? '🌚' : '🌞'

    localStorage.setItem('tema', temaInicial === 'claro' ? 'escuro' : 'claro')

    const novoTema = body.style.getPropertyValue('--cor-de-fundo') === '#000' ? '#FFF' : '#000';
    body.style.setProperty('--cor-de-fundo', novoTema);

    const novoTexto = body.style.getPropertyValue('--cor-de-texto') === '#FFF' ? '#000' : '#FFF';
    body.style.setProperty('--cor-de-texto', novoTexto);
})