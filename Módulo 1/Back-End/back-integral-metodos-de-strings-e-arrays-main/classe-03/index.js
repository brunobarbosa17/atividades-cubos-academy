const texto = "Aprenda programar do zero na Cubos Academy";
let url = texto.toLowerCase()
url = url.split("")

for (let i = 0; i < url.length; i++) {
    if (url[i] === ' ') {
      url[i] = "-"
  }
}
url = url.join("")
console.log(url)

