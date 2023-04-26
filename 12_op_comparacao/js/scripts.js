//são comumente utilizados para verificação nas estruturas de condição;
//temos os seguintes operadores : ==, !=, >, <. >=, <=
//a partir de uma expresão de comparação podemos obter um true ou false

var idade = 18
var possuiCarro = 0
// ao atribuir um valor de 0 numa variavel o JS entende como "false"
//1 é entendido como "true", isso se aplica para condições;

if (idade >=18){
    console.log("Pode fazer a CNH")
}

if (idade <= 17){
    console.log("Não pode fazer a CNH")
}

if(possuiCarro){
    console.log("já pode andar de carro")
}

var nome = "jefferson"

if(nome == "jefferson"){
    console.log("o Seu nome é " + nome);
}