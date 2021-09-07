const {listaDeInstrutores, salvarInstrutores} = require("../dados/instrutores");
let proximoId = listaDeInstrutores.length + 1;

const areaDeAtuacaoValidas = [
    'Logica',
    'back-end',
    'Full-stack',
    'Flutter',
    "Soft Skills",
    'UI/UX'
]

function consultarTodosOsInstrutores(req, res) {
    res.json(listaDeInstrutores)
}


function consultarUmInstrutor(req, res) {
    const instrutor = listaDeInstrutores.find((instrutor) => instrutor.id === Number(req.params.idConsultado))

    if (!instrutor) {
        res.status(404)
        res.json({
            erro: `Instrutor ${ req.params.idConsultado } não existe!`
        })
        return;
    }

    res.json(instrutor)
}

function validarInstrutor(instrutor) {
    if (!instrutor.nome) {
        return "O campo 'nome' é obrigatório.";
    }

    if (!instrutor.idade) {
        return "O campo 'idade' é obrigatório.";
    }

    if (!instrutor.areaDeAtuacao) {
        return "O campo 'Area de Atuacao' é obrigatório.";
    }

    if (typeof instrutor.nome !== 'string') {
        return "O campo 'nome' deve ser preenchido somente com letras";
    }

    if (typeof instrutor.idade !== 'number') {
        return "O campo 'idade' deve ser preenchido somente números";
    }
    
    if (typeof instrutor.areaDeAtuacao !== 'string') {
        return "O campo 'areaDeAtuacao' deve ser preenchido somente com texto";
    }

    if (instrutor.idade < 18) {
        return "O instrutor deve ser maior de idade";
    }

    if (!areaDeAtuacaoValidas.includes(instrutor.areaDeAtuacao)) {
        return "A área de atuação informada é inválida";
    }

    if (!instrutor.nome.includes(" ")) {
        return "O nome deve ser completo";
    }
}

function criarInstrutor(req, res) {
    const erro = validarInstrutor(req.body)

    if (erro) {
        res.status(400);
        res.json({ erro });
        return;
    }
    
    listaDeInstrutores.push(
        {
            id: proximoId,
            nome: req.body.nome,
            idade: req.body.idade,
            areaDeAtuacao: req.body.areaDeAtuacao,
        }
    )
    salvarInstrutores()

    proximoId++;

    res.json(listaDeInstrutores)
}

function editarInstrutor(req, res) {
    const instrutor = listaDeInstrutores.find((instrutor) => instrutor.id === Number(req.params.idConsultado))

    if (!instrutor) {
        res.status(404)
        res.json({
            erro: `Instrutor ${ req.params.idConsultado } não existe!`
        })
        return;
    }

    const erro = validarInstrutor(
        {
            nome: req.body.nome ?? instrutor.nome,
            idade: req.body.idade ?? instrutor.idade,
            areaDeAtuacao: req.body.areaDeAtuacao ?? instrutor.areaDeAtuacao,
        }
    )

    if (erro) {
        res.status(400);
        res.json({ erro });
        return;
    }

    if (req.body.nome !== undefined) {
        instrutor.nome = req.body.nome;
    }

    if (req.body.idade !== undefined) {
        instrutor.idade = req.body.idade;
    }

    if (req.body.areaDeAtuacao !== undefined) {
        instrutor.areaDeAtuacao = req.body.areaDeAtuacao;
    }

    salvarInstrutores()
    res.json(instrutor)
}

function substituirInstrutor(req, res) {
    const erro = validarInstrutor(req.body)

    if (erro) {
        res.status(400);
        res.json({ erro });
        return;
    }

    if (req.body.id !== Number(req.params.idConsultado)) {
        res.status(400);
        res.json({
            erro: "O campo 'ID' deve ser igual na rota e no corpo da requisição"
        });
        return;
    }

    const instrutor = listaDeInstrutores.find((instrutor) => instrutor.id === Number(req.params.idConsultado))

    if (instrutor) {
        instrutor.nome = req.body.nome;
        instrutor.idade = req.body.idade;
        instrutor.areaDeAtuacao = req.body.areaDeAtuacao;
        res.json(instrutor)
    } else {
        const novoInstrutor = req.body
        listaDeInstrutores.push(novoInstrutor)
        res.json(novoInstrutor)
    }

    salvarInstrutores()
}

function excluirInstrutor(req, res) {
    const instrutor = listaDeInstrutores.find((instrutor) => instrutor.id === Number(req.params.idConsultado))

    if (!instrutor) {
        res.status(404)
        res.json({
            erro: `Instrutor ${ req.params.idConsultado } não existe!`
        })
        return;
    }

    const indice = listaDeInstrutores.indexOf(instrutor)

    listaDeInstrutores.splice(indice, 1)

    salvarInstrutores()

    res.json(listaDeInstrutores)   
}


module.exports = {
    consultarTodosOsInstrutores,
    consultarUmInstrutor,
    criarInstrutor,
    editarInstrutor,
    substituirInstrutor,
    excluirInstrutor
};