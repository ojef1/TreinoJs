//caso a instrução de if seja negativa, podemos adicionar else
//que será a outra condição a ser executada
//podemos então criar uma bifurcação no código
//já o else if tem a possibilidade de fazer a outra verificação
//e adicionar mais um bloco de código

var nome = "xavier";

if(nome == "pedro"){
    console.log("o nome dele é pedro")
}else if (nome == "jefferson") {
    console.log('o nome é jefferson')
}else if (nome == "xavier") {
    console.log("o nome é xavier")
}else{
    console.log("Ele possui outro nome!")
}

var idade = 19;

if (idade >20){
    console.log("ele pode entrar na festa")
}else if (idade >=18){
    console.log("ele só pode entrar com autorização")
}

if (nome == "jefferson"){
    console.log("teste");
}else{
    console.log("testando")
}