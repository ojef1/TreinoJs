// funções são blocos de códigos reutilizaveis
//ou seja, evitamos a repetição da lógica de um programa em diversas partes do código
//a função precisa ser invocada para ser executada

function primeiraFunção(){

    console.log("Hello World das funções")

}
primeiraFunção(); //chamar função


function dizerNome(nome){

    console.log("O nome é : " + nome);

}
dizerNome("Jefferson");
dizerNome("Pedro");
dizerNome("Xavier");

var nomeDoBancoDeDados = "João";

dizerNome(nomeDoBancoDeDados);

function soma (a , b){
    var soma = a + b
    return soma;
}

var somaUm = soma(2,5)
console.log(somaUm)

var somaDois = soma(5,5)
console.log(somaDois)

console.log(soma(4,5))

