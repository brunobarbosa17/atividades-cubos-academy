const comentario = "Esse CoViD é muito perigoso!";



if (comentario.toLowerCase().includes('covid') || comentario.toLowerCase().includes('pandemia')) {
    console.log('Comentário bloqueado por conter palavras proibidas')
} else {
    console.log('Comentário autorizado')
}