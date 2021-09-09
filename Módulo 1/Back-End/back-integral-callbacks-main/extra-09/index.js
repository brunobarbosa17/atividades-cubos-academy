const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
]

const pessoas2 = pessoas.filter((x) => {
    return x.profissao === 'Programador' && x.idade > 20
})



const pessoas3   = pessoas.filter((x) => {
    return x.profissao === 'Jornalista' && x.idade > 30
})

const pessoas4 = pessoas.filter((x) => {
    return x.profissao === 'Jornalista' || x.profissao === 'Programador'
}).filter(x => {
    return x.idade < 30
})


console.log(pessoas2)
console.log(pessoas3)
console.log(pessoas4)

