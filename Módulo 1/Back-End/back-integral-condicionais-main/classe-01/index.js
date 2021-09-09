const jogada1 = "tesoura"
const jogada2 = "tesoura"

if (jogada1 == "pedra" && jogada2 == "tesoura") {
    console.log(jogada1)
} else if (jogada1 == "tesoura" && jogada2 == "pedra" ) {
    console.log(jogada2)
} else if (jogada1 == "pedra" && jogada2 == "pedra") {
    console.log("empate")
} else if (jogada1 == "tesoura" && jogada2 == "tesoura") {
    console.log("empate")
}