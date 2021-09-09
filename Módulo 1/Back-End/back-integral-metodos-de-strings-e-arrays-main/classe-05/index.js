const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

if (livros.indexOf(nomeDoLivro) != -1) {
    console.log(`O livro está na posição ${livros.indexOf(nomeDoLivro)}`)
} else {
    console.log('Livro não encontrado')
}