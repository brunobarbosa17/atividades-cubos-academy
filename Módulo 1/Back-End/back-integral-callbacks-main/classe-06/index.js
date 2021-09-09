const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];


let i = 0
const id = setInterval(() => {
    console.log(jogadores[i])
    i++;
    if (i === jogadores.length) i = 0;
}, 2000);

    
const id2 =setInterval(() => {
    console.log('A rodada terminou!')
    clearInterval(id,id2)
}, 10000);
