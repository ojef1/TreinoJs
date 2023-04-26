//os métodos de string também auxiliam na sua modificação
//podemos por exemplo deixar a donte em caiza alta ou caixa baixa com JS


//toLowerCase e toUpperCase - deixa tudo minusculo ou maiusculo

var frase = "Esta é a frase que vamos manipular"

var fraseCaixaAlta = frase.toUpperCase()

console.log(frase.toLowerCase())
console.log(fraseCaixaAlta)

//trim - recolhe somente a string, sem os espaços em branco

var nome = "             jefferson               "

var nomeTrim = nome.trim()

console.log(nome)
console.log(nomeTrim)

//split - transforma em um array e separa os itens com virgula (nesse exemplo)

console.log(frase.split(" "))

var tags = "PHP, JAVASCRIPT, HTML, CSS"

console.log(tags.split(", "))

//lastIndexOf - ao contrário do indexOf, esse pega o ultimo indice. comeca da esquerda para a direita

var fraseDois = 'Eu quero a última palavra teste desta frase de teste'

console.log(fraseDois.indexOf("teste"))
console.log(fraseDois.lastIndexOf('teste'))