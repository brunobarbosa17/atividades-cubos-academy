const email = ".messias@cubos.";

if (email.includes('@') && email.includes('.') && email[0] != '.' && email[email.length - 1] != '.') {
    console.log('E-maill válido')
} else {
    console.log('E-mail inválido')
}

