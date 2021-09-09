const alunos = [
    {
        nome: "Paula",
        apelido: "Paulete",
        idade: 26,
        signo: "Áries",
        bandaFavorita: "Rolling Stones",
        email: "paulete123@gmail.com",
        serieFavorita: "Dark",
        curso: "PDZ",
        roupaDeDormir: "pijama"
    },
    {
        nome: "Felisberto",
        apelido: "Betinho",
        idade: 20,
        signo: "Sargitário",
        bandaFavorita: "Madonna",
        email: "betinho.felis@gmail.com",
        serieFavorita: "Um maluco no pedaço",
        curso: "PDZ",
        roupaDeDormir: "só cueca"
    }
];

// const alunosResumidoVersaoMap = alunos.map( (aluno) => {
//     return {
//     nome: aluno.nome,
//     idade: aluno.idade,
//     email: aluno.email,
//     curso: aluno.curso
//     }
// })

// const alunosResumidos2 = []
// for (let i = 0; i < alunos.length; i++) {
//     const { nome, idade, email, curso } = alunos[i]
//     const alunoResumido = { nome, idade, email, curso }
//     alunosResumidos2.push(alunoResumido)
// }

const alunosResumidos2 = alunos.map( (aluno) => {
    const { nome, idade, email, curso } = aluno
    const alunoResumido = { nome, idade, email, curso }
    return alunoResumido
})


console.log(alunosResumidos2)
