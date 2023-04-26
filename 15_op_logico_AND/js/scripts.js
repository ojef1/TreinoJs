//nas linguagens de programação existem os operadores lógicos
//estes operadores realizam comparações para que seja retornado um true ou false
//decidindo então o fluxo da aplicação
//utilizamos principalmente nas intruções de condição e repetição
//em conjunto dos operadores de comparação

//o operador lógico && é conhecido como AND
//ele vai retornar true apenas se as duas expressões retornarem true
//qualquer outro resultado retornará false

var idade = 16
var nome = "Joao"

if(nome == "Joao" && idade == 16){
    console.log("O Joao pode entrar na aula")
}else{
    console.log("Este não é o Joao")
}

if (1 == 1 && 3 > 2 && true){
    console.log("passou")
}