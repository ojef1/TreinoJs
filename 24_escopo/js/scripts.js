//no JS podemos ter vários escopos
//o global, que é iniciado em toda a aplicação
//e os locais, que podem existir em várias instruções como as funções

//escopo global
var x = 1
var y = 3

console.log(x, y)

function teste(){
    //escopo local
    //só existe dentro da função
    var z = 0
    console.log(z)
    console.log(x)
}
teste()

function testando(){
    //mesmo tendo o mesmo nome de variavel, elas não se misturam por existir apenas dentro de sua respectiva funcão;
    z = 5
    console.log(z)
}
testando()

//estruturas de repetição definem escopo global
if (true){
    var p = 1 
}
console.log(p)
