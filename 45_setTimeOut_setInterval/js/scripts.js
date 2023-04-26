//podemos com estas funções criar ações no software que executam depois de um tempo ou de tempos em tempos;
//um dos argumentos destas funções é uma callback function;


//setTimeOut
console.log("Antes do SetTimeOut")

setTimeout(function(){
    console.log("testando o SetTimeOut")
}, 2000)

console.log("Depois do SetTimeOut")


//setInterval
setInterval(function(){
    console.log("Testando setInterval")
}, 10000)