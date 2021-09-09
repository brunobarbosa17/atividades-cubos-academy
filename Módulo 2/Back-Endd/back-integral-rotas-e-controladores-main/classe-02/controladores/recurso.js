const alunos = [
    {
    "id": 1,
    "nome": "Marcos",
    "sobrenome": "Silveira",
    "idade": 36,
    "curso": "Programação do Zero"
    }
]

let proximoId = alunos.length+1

function consultarTodosOsAlunos(req,res) {
    if (alunos.length >= 1) {
        res.status(200)
        res.json(alunos)
    } else {
        res.status(401)
        res.json({erro: 'Não há alunos inscritos'})
    }
}


function consultarUmAluno(req,res) {
    if (alunos.length >= 1) {
        const aluno = alunos.find((aluno) => aluno.id === Number(req.params.idAluno))
        if (aluno) {
            res.status(200)
            res.send(aluno)
        } else {
            res.send({erro: `O aluno com id ${req.params.idAluno} não foi encontrado.`})
        }
    } else {
        res.status(401)
        res.json({erro: 'Não há alunos inscritos'})
    }
}

function criarAluno(req,res) {
    alunos.push(
        {
            "id": proximoId,
            "nome": req.body.nome,
            "sobrenome": req.body.sobrenome,
            "idade": req.body.idade,
            "curso": req.body.curso
        }
    )
    
    proximoId++
    res.status(200)
    res.json(alunos)
}

function excluirAluno(req,res) {
    const aluno = alunos.find((aluno) => aluno.id === Number(req.params.idAluno))
    if (!aluno) {
        res.status(404)
        res.json({ erro: `Aluno com id ${ req.params.idAluno } não existe!` })
        return;
    }

    res.status(200)
    const indice = alunos.indexOf(aluno)
    alunos.splice(indice, 1)
    res.json(alunos)
}

module.exports = {consultarTodosOsAlunos, consultarUmAluno, criarAluno, excluirAluno}