function validarSenha(req, res, next) {
    const senhaDigitada = req.query.senha
    if (req.method === 'GET' || req.query.senha === 'cubos123') {
        next();
    } else if(typeof senhaDigitada === 'undefined'){
        res.json({erro: 'Insira uma senha mô pai'})
    } else {
        res.status(401);

        res.json({
            erro: 'Senha errada meu parceiro'
        })
    }
}

module.exports = {validarSenha}