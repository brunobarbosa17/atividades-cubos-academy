const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

if (aposentada || portadoraDeDoenca) {
    console.log('ISENTA')
} else if (totalDeRendimentos < 28_559_70) {
    console.log('VAZA LEAO! JA TA DIFICIL SEM VOCE')
} else if (!aposentada || totalDeRendimentos > 28_559_70) {
    console.log('PEGA LEAO')
}