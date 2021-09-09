let C = 60_000
let M = 90_000
let n = 24 

let i = Math.pow(M/C,1/n)

console.log(`O seu financiamento de R$${C} teve uma taxa de juros de ${i.toFixed(5)}, pois após ${n} meses você teve que pagar ${M} reais`)

