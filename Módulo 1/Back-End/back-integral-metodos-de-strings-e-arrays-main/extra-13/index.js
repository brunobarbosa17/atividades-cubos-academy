const nomeArquivo = 'Foto da Familia.png';

function format(nomeArquivo) {
    if (nomeArquivo.includes('jpg') || nomeArquivo.includes('jpeg') || nomeArquivo.includes('gif') || nomeArquivo.includes('png')) {
        console.log('Arquivo válido')
    } else {
        console.log('Arquivo Inválido')
    }
}

format(nomeArquivo)