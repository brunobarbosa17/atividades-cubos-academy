const cpf = "1.1.1.1-51.1.1/4";

function format(cpf) {
    cpf = cpf.split("")
    for (let i = 0; i < cpf.length; i++) {
        if (cpf[i] === '.' || cpf[i] === '-' || cpf[i] === '/') {
            cpf.splice(i,1)
        }
    }
    cpf = cpf.join("")
    console.log(cpf)
}

format(cpf)