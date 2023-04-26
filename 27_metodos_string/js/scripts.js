//o objeto String também possui métodos muito uteis
//que vão nos auxiliar a manusear textos nos nossos softwares

//length - contabiliza quantos caracteres tem
var nome = "jefferson"

console.log(nome.length)

var obj = 'bola'

console.log(obj.length)

//indexof - mostra em qual indice (posição numerica) determinda coisa esta

console.log(nome[2])

var frase = 'o rato roeu a roupa do rei de roma'

console.log(frase.indexOf("roeu"))

//slice - recorta determinada coisa, nos () se marca inicio e fim do recorte, em indices

var roeu = frase.slice(7,11)

console.log(roeu)

//replace - substitui uma palava, no () vai primeiro a palava que vai ser substituida e depois a que vai substituir

var novaFrase = frase.replace("roeu","comeu")

console.log(novaFrase)